import { IsBoolean, IsNotEmpty, IsString } from 'class-validator';

export class ServiceDto {
  @IsString()
  id: string;

  @IsString()
  slug: string;

  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  description: string;

  @IsBoolean()
  isActive: boolean;

  @IsString()
  userId: string;
}
