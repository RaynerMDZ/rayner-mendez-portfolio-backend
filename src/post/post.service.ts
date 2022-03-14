import { Injectable, Logger, NotFoundException } from '@nestjs/common';
import { DatabaseService } from '../database/database.service';
import { UserService } from '../user/user.service';
import { PostDto } from './dto/post.dto';

@Injectable()
export class PostService {
  private readonly logger: Logger;
  constructor(
    private readonly database: DatabaseService,
    private readonly userService: UserService,
  ) {
    this.logger = new Logger('Post Service');
  }

  async createOrUpdateUserPost(postDto: PostDto) {

  }

  async getUserPosts(userId: string, page: number, pageSize: number) {
    const user = await this.database.user.findUnique({
      where: { id: userId },
      include: { posts: true },
    });

    if (!user)
      throw new NotFoundException(`User with id: ${userId} not found.`);

    return user.posts;
  }

  async getUserPost(userId: string, postId: string) {
    const user = await this.userService.getUser(userId);
    if (!user)
      throw new NotFoundException(`User with id: ${userId} not found.`);

    const post = await this.database.post.findUnique({ where: { id: postId } });
    if (!post)
      throw new NotFoundException(`Post with id: ${postId} not found.`);

    return post;
  }

  async getUserPostPictures(id: string) {
    const post = await this.database.post.findUnique({
      where: { id: id },
      include: { pictures: true },
    });

    return post.pictures;
  }

  async getUserPostSkills(id: string) {
    const post = await this.database.post.findUnique({
      where: { id: id },
      include: { skills: true },
    });

    return post.skills;
  }
}
