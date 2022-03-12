import { Module } from '@nestjs/common';
import { EmploymentService } from './employment.service';

@Module({
  providers: [EmploymentService],
})
export class EmploymentModule {}
