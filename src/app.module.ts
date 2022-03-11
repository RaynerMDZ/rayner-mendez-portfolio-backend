import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { DatabaseModule } from './database/database.module';
import { ConfigModule } from '@nestjs/config';
import { LoginDto } from './auth/dto/login.dto';
import { SignupDto } from './auth/dto/signup.dto';
import { PostModule } from './post/post.module';
import { PictureModule } from './picture/picture.module';
import { AboutModule } from './about/about.module';
import { SkillModule } from './skill/skill.module';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    AuthModule,
    DatabaseModule,
    LoginDto,
    SignupDto,
    PostModule,
    PictureModule,
    AboutModule,
    SkillModule,
  ],
})
export class AppModule {}
