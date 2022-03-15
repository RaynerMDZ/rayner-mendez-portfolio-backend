import { IsBoolean, IsNotEmpty, IsString, IsUrl } from 'class-validator';

export class PostDto {
  @IsString()
  id: string;

  @IsString()
  slug: string;

  @IsString()
  @IsNotEmpty()
  title: string;

  @IsString()
  description: string;

  @IsString()
  @IsUrl()
  github: string;

  @IsUrl()
  @IsString()
  url: string;

  @IsBoolean()
  isActive: boolean;

  @IsString()
  userId: string;
}
