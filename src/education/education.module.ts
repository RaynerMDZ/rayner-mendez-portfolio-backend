import { Module } from '@nestjs/common';
import { EducationService } from './education.service';
import { UserService } from '../user/user.service';

@Module({
  providers: [EducationService],
})
export class EducationModule {}
