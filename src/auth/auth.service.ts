import {
  ConflictException,
  ForbiddenException,
  Injectable, Logger
} from '@nestjs/common';
import { DatabaseService } from '../database/database.service';
import { LoginDto } from './dto/login.dto';
import * as argon from 'argon2';
import { JwtService } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';
import { SignupDto } from './dto/signup.dto';

@Injectable()
export class AuthService {
  private readonly logger: Logger;
  constructor(
    private readonly database: DatabaseService,
    private readonly jwt: JwtService,
    private readonly config: ConfigService,
  ) {
    this.logger = new Logger('Security Service');
  }

  async login(dto: LoginDto) {
    try {
      const { email, password } = dto;

      const authentication = await this.database.authentication.findUnique({
        where: {
          email: email,
        },
        include: { user: true },
      });

      if (!authentication) {
        throw new ForbiddenException('Incorrect Credentials');
      }

      const passwordMatches = await argon.verify(
        authentication.password,
        password,
      );

      if (!passwordMatches) {
        throw new ForbiddenException('Incorrect Credentials');
      }

      return this.signToken(authentication.id, authentication.email);
    } catch (err) {
      throw new ForbiddenException('Incorrect Credentials');
    }
  }

  async signup(dto: SignupDto) {
    const { email, password } = dto;

    try {
      const hash = await argon.hash(password);

      return await this.database.authentication.create({
        data: { email: email, password: hash },
      });
    } catch (err) {
      this.logger.error(`User with email: ${email} already exists.`);
      throw new ConflictException(`User with email: ${email} already exists.`);
    }
  }

  private async signToken(
    userId: string,
    email: string,
  ): Promise<{ access_token: string }> {
    const payload = {
      sub: userId,
      email,
    };

    const token = await this.jwt.signAsync(payload, {
      expiresIn: '20m',
      secret: this.config.get('JWT_SECRET'),
    });

    return {
      access_token: token,
    };
  }
}
