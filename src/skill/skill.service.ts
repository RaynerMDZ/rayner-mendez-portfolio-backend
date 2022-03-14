import { ConflictException, Injectable, Logger } from '@nestjs/common';
import { DatabaseService } from '../database/database.service';
import { UserService } from '../user/user.service';
import { PostService } from '../post/post.service';
import { SkillDto } from './dto/skill.dto';

@Injectable()
export class SkillService {
  private readonly logger: Logger;
  constructor(
    private readonly database: DatabaseService,
    private readonly userService: UserService,
    private readonly postService: PostService,
  ) {
    this.logger = new Logger('Skill Service');
  }

  async createOrUpdateUserSkill(user_Id: string, skillDto: SkillDto) {
    const user = await this.userService.getUser(user_Id);
    if (user) {
      const { id, slug, name, description, isActive } = skillDto;

      return await this.database.skill.upsert({
        where: { id: id },
        create: {
          slug: slug,
          name: name,
          description: description,
          is_active: true,
          user_id: user_Id,
        },
        update: {
          slug: slug,
          name: name,
          description: description,
          is_active: isActive,
          user_id: user_Id,
          modified_date: new Date(),
        },
      });
    }
    throw new ConflictException(`User with id: ${user_Id} Does not exists.`);
  }

  async getUserSkills(userId: string) {
    return await this.database.user.findUnique({
      where: { id: userId },
      select: { skills: true },
    });
  }

  async createOrUpdateUserPostSkills(
    userId: string,
    postId: string,
    skillDto: SkillDto,
  ) {
    const user = await this.userService.getUser(userId);
    if (user) {
      const post = await this.postService.getUserPost(user.id, postId);
      if (post) {
        const { id, slug, name, description, isActive } = skillDto;

        return await this.database.skill.upsert({
          where: { id: id },
          create: {
            slug: slug,
            name: name,
            description: description,
            is_active: isActive,
            post_id: post.id,
          },
          update: {
            slug: slug,
            name: name,
            description: description,
            is_active: isActive,
            post_id: post.id,
            modified_date: new Date(),
          },
        });
      }
      throw new ConflictException(`Post with id: ${postId} Does not exists.`);
    }
    throw new ConflictException(`User with id: ${userId} Does not exists.`);
  }

  async getUserPostSkills(userId: string, postId: string) {
    return await this.database.user.findUnique({
      where: { id: userId },
      select: {
        posts: {
          where: { id: postId },
          select: { skills: true },
        },
      },
    });
  }

  async removeUserSkill(userId: string, skillId: string) {

  }

  async removeUserPostSkill(userId: string, skillId: string) {

  }

  async toggleActiveOrUnactiveSkill(userId: string, skillId: string) {
    const skill = await this.database.skill.findUnique({
      where: { id: skillId },
    });
    if (skill) {
      const isActive = skill.is_active;
      return await this.database.skill.update({
        where: { id: skillId },
        data: {
          is_active: !isActive,
          modified_date: new Date(),
        },
      });
    }
    throw new ConflictException(`Skill with id: ${skillId} Does not exists.`);
  }
}
