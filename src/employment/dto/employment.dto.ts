import { IsNotEmpty, IsString } from 'class-validator';

export class EmploymentDto {
  @IsString()
  id: string;

  @IsString()
  slug: string;

  @IsString()
  @IsNotEmpty()
  company: string;

  @IsString()
  @IsNotEmpty()
  jobTitle: string;

  @IsString()
  @IsNotEmpty()
  location: string;

  @IsString()
  @IsNotEmpty()
  description: string;

  @IsNotEmpty()
  startDate: Date | string;

  @IsNotEmpty()
  endDate: Date | string;

  @IsString()
  @IsNotEmpty()
  user_id: string;
}
