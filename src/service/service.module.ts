import { Module } from '@nestjs/common';
import { ServiceService } from './service.service';
import { UserService } from '../user/user.service';

@Module({
  providers: [ServiceService, UserService],
})
export class ServiceModule {}
