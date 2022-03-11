import { ReturnPostDto } from '../../post/dto/return-post.dto';
import { ReturnServiceDto } from '../../service/dto/return-service.dto';
import { ReturnPictuteDto } from '../../picture/dto/return-pictute.dto';
import { ReturnSkillDto } from '../../skill/dto/return-skill.dto';

export class ReturnUserDto {
  id: string;
  slug: string;
  first_name: string;
  middle_name: string;
  last_name: string;
  phone_number: string;
  location: string;
  summary: string;
  github: string;
  linkedin: string;
  twitter: string;
  resume_url: string;
  created_date: Date;
  modified_date: Date;
  profile_picture: ReturnPictuteDto;
  skills: ReturnSkillDto[];
  services: ReturnServiceDto[];
  posts: ReturnPostDto[];
}
