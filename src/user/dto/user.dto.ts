import { IsNotEmpty, IsPhoneNumber, IsString } from 'class-validator';
import { PostDto } from "../../post/dto/post.dto";
import { SkillDto } from "../../skill/dto/skill.dto";
import { PictureDto } from "../../picture/dto/picture.dto";
import { ServiceDto } from "../../service/dto/service.dto";

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
  github: string;

  @IsString()
  linkedin: string;

  @IsString()
  twitter: string;

  @IsString()
  resumeUrl: string;

  profilePicture: PictureDto;
  skills: SkillDto[];
  services: ServiceDto[];
  posts: PostDto[];
}
