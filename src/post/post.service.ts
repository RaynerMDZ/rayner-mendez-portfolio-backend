import { Injectable, Logger, NotFoundException } from '@nestjs/common';
import { DatabaseService } from '../database/database.service';


@Injectable()
export class PostService {
  private readonly logger: Logger;
  constructor(private readonly database: DatabaseService) {
    this.logger = new Logger('Post Service');
  }

  async getPosts(userId: string, page: number, pageSize: number) {
    const user = await this.database.user.findUnique({
      where: { id: userId },
      include: { posts: true },
    });

    if (!user)
      throw new NotFoundException(`User with id: ${userId} not found.`);

    return user.posts;
  }

  async getPost(userId: string, postId: string) {
    // const user = await this.userService.getUser(userId);
    // if (!user)
    //   throw new NotFoundException(`User with id: ${userId} not found.`);
    //
    // const post = await this.database.post.findUnique({ where: { id: postId } });
    // if (!post)
    //   throw new NotFoundException(`Post with id: ${postId} not found.`);
    //
    // return post;
    return false;
  }

  async getPictures(id: string) {
    const post = await this.database.post.findUnique({
      where: { id: id },
      include: { pictures: true },
    });

    return post.pictures;
  }

  async getSkills(id: string) {
    const post = await this.database.post.findUnique({
      where: { id: id },
      include: { skills: true },
    });

    return post.skills;
  }
}
