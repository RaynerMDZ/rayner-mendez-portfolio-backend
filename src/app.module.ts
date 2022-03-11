import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { DatabaseModule } from './database/database.module';
import { ConfigModule } from '@nestjs/config';
import { LoginDto } from './auth/dto/login.dto';
import { SignupDto } from './auth/dto/signup.dto';
import { PostModule } from './post/post.module';
import { PictureModule } from './picture/picture.module';
import { SkillModule } from './skill/skill.module';
import { AdminModule } from './admin/admin.module';
import { UserModule } from './user/user.module';
import { ServiceModule } from './service/service.module';
import { EducationModule } from './education/education.module';
import { EmploymentModule } from './employment/employment.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    AuthModule,
    DatabaseModule,
    LoginDto,
    SignupDto,
    PostModule,
    PictureModule,
    SkillModule,
    AdminModule,
    UserModule,
    ServiceModule,
    EducationModule,
    EmploymentModule,
  ],
})
export class AppModule {}
