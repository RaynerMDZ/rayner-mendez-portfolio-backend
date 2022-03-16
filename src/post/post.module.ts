import { Module } from '@nestjs/common';
import { PostService } from './post.service';
import { UserService } from '../user/user.service';

@Module({
  providers: [PostService, UserService],
})
export class PostModule {}
