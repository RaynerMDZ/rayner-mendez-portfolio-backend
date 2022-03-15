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

  async createOrUpdateUserPost(user_id: string, postDto: PostDto) {
    const { id, slug, userId, url, isActive, github, title, description } = postDto;

    const user = await this.userService.getUser(userId);
    if (!user)
      throw new NotFoundException(`User with id: ${user_id} not found.`);

    try {
      return await this.database.post.upsert({
        where: { id: id },
        create: {
          slug: slug,
          title: title,
          description: description,
          github: github,
          url: url,
          is_active: true,
          user_id: user.id,
        },
        update: {
          slug: slug,
          title: title,
          description: description,
          github: github,
          url: url,
          is_active: isActive,
          user_id: user.id,
          modified_date: new Date(),
        },
      });
    } catch (err) {
      throw new NotFoundException(err);
    }
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
