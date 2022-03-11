import { Module } from '@nestjs/common';
import { EmploymentService } from './employment.service';
import { EmploymentController } from './employment.controller';

@Module({
  controllers: [EmploymentController],
  providers: [EmploymentService]
})
export class EmploymentModule {}
