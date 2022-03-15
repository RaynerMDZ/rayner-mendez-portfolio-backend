import { Module } from '@nestjs/common';
import { EmploymentService } from './employment.service';
import { UserService } from '../user/user.service';

@Module({
  providers: [EmploymentService, UserService],
})
export class EmploymentModule {}
