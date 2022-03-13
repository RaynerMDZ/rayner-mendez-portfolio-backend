import { Injectable } from '@nestjs/common';
import { DatabaseService } from '../database/database.service';
import { PictureService } from '../picture/picture.service';
import { SkillService } from '../skill/skill.service';

@Injectable()
export class PostService {
  constructor(
    private readonly database: DatabaseService,
    private readonly pictureService: PictureService,
    private readonly skillService: SkillService,
  ) {}

  async getPost(id: string) {
    return await this.database.post.findUnique({ where: { id: id } });
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
