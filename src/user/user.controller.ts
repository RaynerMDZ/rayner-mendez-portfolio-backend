import { Controller, Get, Param, Query } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('v1/users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get(':id')
  async getUser(@Param('id') id: string) {
    return await this.userService.getUser(id);
  }

  @Get(':user-id/posts')
  async getPosts(@Param('user-id') userId: string, @Query('page') page: number, @Query('pageSize') pageSize: number) {
    return await this.userService.getPosts(userId, page, pageSize);
  }

  @Get(':user-id/posts/:post-id')
  async getPost(@Param('user-id') userId: string, @Param('post-id') postId: string) {
    return await this.userService.getPost(userId, postId);
  }

  @Get(':user-id/skills')
  async getSkills(@Param('user-id') userId: string) {
    return await this.userService.getSkills(userId);
  }

  @Get(':user-id/educations')
  async getEducations(@Param('user-id') userId: string) {
    return await this.userService.getEducations(userId);
  }

  @Get(':user-id/employments')
  async getEmployments(@Param('user-id') userId: string) {
    return await this.userService.getEmployments(userId);
  }
}
