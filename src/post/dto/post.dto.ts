import { SkillDto } from '../../skill/dto/skill.dto';
import { PictureDto } from '../../picture/dto/picture.dto';

export class PostDto {
  id: string;
  slug: string;
  title: string;
  description: string;
  github: string;
  url: string;
  isActive: string;
  createdDate: string;
  modifiedDate: string;
  pictures: PictureDto[];
  skills: SkillDto[];
  userId: string;
}
