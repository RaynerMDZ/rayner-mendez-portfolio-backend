import { Module } from '@nestjs/common';
import { AdminService } from './admin.service';
import { AdminController } from './admin.controller';
import { EducationService } from '../education/education.service';
import { EmploymentService } from '../employment/employment.service';
import { PictureService } from '../picture/picture.service';
import { PostService } from '../post/post.service';
import { ServiceService } from '../service/service.service';
import { SkillService } from '../skill/skill.service';
import { UserService } from '../user/user.service';
import { MicrosoftAzureBlobStorageService } from '../microsoft-azure-blob-storage/microsoft-azure-blob-storage.service';

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
    MicrosoftAzureBlobStorageService
  ],
})
export class AdminModule {}
