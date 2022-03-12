import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { EmploymentService } from '../employment/employment.service';
import { EducationService } from '../education/education.service';
import { PostService } from '../post/post.service';
import { ServiceService } from '../service/service.service';
import { SkillService } from '../skill/skill.service';
import { PictureService } from '../picture/picture.service';

@Module({
  controllers: [UserController],
  providers: [
    UserService,
    EmploymentService,
    EducationService,
    PostService,
    ServiceService,
    SkillService,
    PictureService,
  ],
})
export class UserModule {}
