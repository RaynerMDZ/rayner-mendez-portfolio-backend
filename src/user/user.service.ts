import {
  ConflictException,
  Injectable,
  Logger,
  NotFoundException,
} from '@nestjs/common';
import { DatabaseService } from '../database/database.service';
import * as argon from 'argon2';
import { EmailDto } from './dto/email.dto';
import { PasswordDto } from './dto/password.dto';
import { Prisma } from '@prisma/client';
import { UserDto } from './dto/user.dto';

@Injectable()
export class UserService {
  private readonly logger: Logger;
  constructor(private readonly database: DatabaseService) {
    this.logger = new Logger('User Service');
  }

  async getUser(id: string) {
    const user = await this.database.user.findUnique({ where: { id: id } });
    if (!user) throw new NotFoundException(`User with id: ${id} not found.`);
    return user;
  }

  async createOrUpdateUser(dto: UserDto) {
    const {
      id,
      slug,
      firstName,
      middleName,
      lastName,
      phoneNumber,
      location,
      summary,
      github,
      linkedin,
      twitter,
      resumeUrl,
    } = dto;

    try {
      return await this.database.user.upsert({
        where: { id: id },
        create: {
          id: id,
          slug: slug,
          first_name: firstName,
          middle_name: middleName,
          last_name: lastName,
          phone_number: phoneNumber,
          location: location,
          summary: summary,
          github: github,
          linkedin: linkedin,
          twitter: twitter,
          resume_url: resumeUrl,
        },
        update: {
          slug: slug,
          first_name: firstName,
          middle_name: middleName,
          last_name: lastName,
          phone_number: phoneNumber,
          location: location,
          summary: summary,
          github: github,
          linkedin: linkedin,
          twitter: twitter,
          resume_url: resumeUrl,
          modified_date: new Date(),
        },
      });
    } catch (err) {
      if (err instanceof Prisma.PrismaClientKnownRequestError) {
        this.logger.error(`User with id: ${id} already exists.`);
        throw new ConflictException(`User with id: ${id} already exists.`);
      }
    }
  }

  async updateUserPassword(userId: string, passwordDto: PasswordDto) {
    const { password } = passwordDto;
    const hash = await argon.hash(password);
    const user = await this.getUser(userId);

    return await this.database.authentication.update({
      where: { id: user.id },
      data: { password: hash, modified_date: new Date() },
      select: {
        id: true,
        email: true,
        created_date: true,
        modified_date: true,
      },
    });
  }

  async updateUserEmail(userId: string, emailDto: EmailDto) {
    const { email } = emailDto;
    const user = await this.getUser(userId);

    return await this.database.authentication.update({
      where: { id: user.id },
      data: { email: email, modified_date: new Date() },
      select: {
        id: true,
        email: true,
        created_date: true,
        modified_date: true,
      },
    });
  }
}
