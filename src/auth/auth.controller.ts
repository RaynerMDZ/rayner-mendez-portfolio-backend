import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginDto } from './dto/login.dto';
import { SignupDto } from './dto/signup.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly service: AuthService) {}

  @Post('login')
  login(@Body() dto: LoginDto) {
    return this.service.login(dto);
  }

  @Post('signup')
  signup(@Body() dto: SignupDto) {
    return this.service.signup(dto);
  }
}

// https://www.youtube.com/watch?v=GHTA143_b-s&t=5680s
