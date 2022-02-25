import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { LoginDto } from './dto/login.dto';
import { SignupDto } from './dto/signup.dto';

@Module({
  providers: [AuthService],
  controllers: [AuthController],
  imports: [LoginDto, SignupDto],
})
export class AuthModule {}
