import { IsBoolean, IsNotEmpty, IsOptional, IsString, IsUrl } from "class-validator";

export class PictureDto {
  @IsString()
  @IsOptional()
  id: string;

  @IsString()
  @IsOptional()
  slug: string;

  @IsString()
  @IsNotEmpty()
  pictureName: string;

  @IsString()
  @IsOptional()
  @IsUrl()
  pictureUrl: string;

  @IsBoolean()
  @IsOptional()
  isActive: boolean;

  @IsString()
  @IsOptional()
  userId: string;

  @IsString()
  @IsOptional()
  postId: string;
}
