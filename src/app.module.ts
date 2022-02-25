import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { DatabaseModule } from './database/database.module';
import { ConfigModule } from '@nestjs/config';
import { LoginDto } from './auth/dto/login.dto';
import { SignupDto } from './auth/dto/signup.dto';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    AuthModule,
    DatabaseModule,
    LoginDto,
    SignupDto,
  ],
})
export class AppModule {}
