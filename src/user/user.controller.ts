import { Controller, Get, Param, Query } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('v1/users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get(':id')
  async getUser(@Param('id') id: string) {
    return await this.userService.getUser(id);
  }

  @Get(':user_id/posts')
  async getPosts(@Param('user_id') userId: string, @Query('page') page: number, @Query('pageSize') pageSize: number) {
    return await this.userService.getUserPosts(userId, page, pageSize);
  }

  @Get(':user_id/posts/:post_id')
  async getPost(@Param('user_id') userId: string, @Param('post_id') postId: string) {
    return await this.userService.getUserPost(userId, postId);
  }

  @Get(':user_id/skills')
  async getSkills(@Param('user_id') userId: string) {
    return await this.userService.getUserSKills(userId);
  }

  @Get(':user_id/educations')
  async getEducations(@Param('user_id') userId: string) {
    return await this.userService.getUserEducation(userId);
  }

  @Get(':user_id/employments')
  async getEmployments(@Param('user_id') userId: string) {
    return await this.userService.getUserEmployment(userId);
  }
}
