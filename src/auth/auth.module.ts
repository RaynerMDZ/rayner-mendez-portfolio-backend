import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { LoginDto } from './dto/login.dto';
import { SignupDto } from './dto/signup.dto';
import { JwtModule } from '@nestjs/jwt';
import { JwtStrategy } from './strategy/jwt.strategy';

@Module({
  providers: [AuthService, JwtModule],
  controllers: [AuthController],
  imports: [LoginDto, SignupDto, JwtModule.register({}), JwtStrategy],
})
export class AuthModule {

}
