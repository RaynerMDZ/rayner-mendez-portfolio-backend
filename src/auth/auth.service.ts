import { Injectable } from '@nestjs/common';
import { DatabaseService } from '../database/database.service';
import { LoginDto } from './dto/login.dto';
import { SignupDto } from './dto/signup.dto';

@Injectable()
export class AuthService {
  constructor(private readonly database: DatabaseService) {}

  async login(dto: LoginDto) {
    return { msg: 'Working' };
  }

  async signup(dto: SignupDto) {
    return { msg: 'Working' };
  }
}
