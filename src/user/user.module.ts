import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { EmploymentService } from '../employment/employment.service';
import { EducationService } from '../education/education.service';
import { PictureService } from '../picture/picture.service';
import { PostService } from '../post/post.service';
import { ServiceService } from '../service/service.service';
import { SkillService } from '../skill/skill.service';
import { LoggerMiddleware } from '../utils/middlewares/logger.middleware';
import { CreateUserDto } from "./dto/create-user.dto";
import { UpdateUserDto } from "./dto/update-user.dto";

@Module({
  controllers: [UserController],
  providers: [
    UserService,
    EmploymentService,
    EducationService,
    PictureService,
    PostService,
    ServiceService,
    SkillService,
    CreateUserDto,
    UpdateUserDto,
  ],
})
export class UserModule {

}
