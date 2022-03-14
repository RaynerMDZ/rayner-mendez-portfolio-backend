import { Controller, Get, Param } from '@nestjs/common';
import { PostService } from './post.service';

@Controller('v1/posts')
export class PostController {
  constructor(private readonly postService: PostService) {}

  @Get(':id')
  async getPost(@Param('id') id: string) {
    // return await this.postService.getPost(id);
  }

  @Get(':id/pictures')
  async getPictures(@Param('id') id: string) {
    return await this.postService.getPictures(id);
  }

  @Get(':id/skills')
  async getSkills(@Param('id') id: string) {
    return await this.postService.getSkills(id);
  }
}
