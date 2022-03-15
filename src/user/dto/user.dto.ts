import { IsNotEmpty, IsOptional, IsPhoneNumber, IsString, IsUrl } from "class-validator";
import { PostDto } from '../../post/dto/post.dto';
import { SkillDto } from '../../skill/dto/skill.dto';
import { PictureDto } from '../../picture/dto/picture.dto';
import { ServiceDto } from '../../service/dto/service.dto';

export class UserDto {
  @IsString()
  @IsNotEmpty()
  id: string;

  @IsString()
  slug: string;

  @IsString()
  @IsNotEmpty()
  firstName: string;

  @IsString()
  middleName: string;

  @IsString()
  @IsNotEmpty()
  lastName: string;

  @IsPhoneNumber('US')
  @IsNotEmpty()
  phoneNumber: string;

  @IsString()
  location: string;

  @IsString()
  @IsNotEmpty()
  summary: string;

  @IsString()
  @IsUrl()
  github: string;

  @IsString()
  @IsUrl()
  linkedin: string;

  @IsString()
  @IsUrl()
  twitter: string;

  @IsString()
  @IsUrl()
  @IsOptional()
  resumeUrl: string;

  profilePicture: PictureDto;
  skills: SkillDto[];
  services: ServiceDto[];
  posts: PostDto[];
}
