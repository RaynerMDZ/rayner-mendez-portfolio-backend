import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { EmploymentService } from '../employment/employment.service';
import { EducationService } from '../education/education.service';
import { ImageService } from '../image/image.service';
import { PostService } from '../post/post.service';
import { ServiceService } from '../service/service.service';
import { SkillService } from '../skill/skill.service';
import { UserDto } from './dto/user.dto';
import { MicrosoftAzureBlobStorageService } from '../microsoft-azure-blob-storage/microsoft-azure-blob-storage.service';

@Module({
  controllers: [UserController],
  providers: [
    UserService,
    EmploymentService,
    EducationService,
    ImageService,
    PostService,
    ServiceService,
    SkillService,
    UserDto,
    MicrosoftAzureBlobStorageService,
  ],
})
export class UserModule {

}
