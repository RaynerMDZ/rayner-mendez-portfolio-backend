import { IsNotEmpty, IsString } from 'class-validator';

export class EducationDto {
  @IsString()
  id: string;

  @IsString()
  slug: string;

  @IsString()
  @IsNotEmpty()
  institution: string;

  @IsString()
  @IsNotEmpty()
  field: string;

  @IsString()
  @IsNotEmpty()
  degree: string;

  @IsString()
  @IsNotEmpty()
  location: string;

  @IsString()
  @IsNotEmpty()
  description: string;
  url: string;

  @IsNotEmpty()
  startDate: Date;

  @IsNotEmpty()
  endDate: Date;

  @IsString()
  @IsNotEmpty()
  userId: string;
}
