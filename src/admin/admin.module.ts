import { Module } from '@nestjs/common';
import { AdminService } from './admin.service';
import { AdminController } from './admin.controller';
import { UserService } from '../user/user.service';
import { EducationService } from '../education/education.service';
import { EmploymentService } from '../employment/employment.service';
import { PictureService } from '../picture/picture.service';
import { PostService } from '../post/post.service';
import { ServiceService } from '../service/service.service';
import { SkillService } from '../skill/skill.service';

@Module({
  controllers: [AdminController],
  providers: [
    AdminService,
    UserService,
    EducationService,
    EmploymentService,
    PictureService,
    PostService,
    ServiceService,
    SkillService,
  ],
})
export class AdminModule {}
