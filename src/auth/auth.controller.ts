import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginDto } from './dto/login.dto';
import { SignupDto } from './dto/signup.dto';

@Controller('v1/auth')
export class AuthController {
  constructor(private readonly service: AuthService) {}

  @Post('login')
  async login(@Body() dto: LoginDto) {
    return await this.service.login(dto);
  }

  @Post('signup')
  async signup(@Body() dto: SignupDto) {
    return await this.service.signup(dto);
  }
}
