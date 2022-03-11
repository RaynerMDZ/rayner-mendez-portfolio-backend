import { IsNotEmpty, IsPhoneNumber, IsString } from 'class-validator';

export class CreateUserDto {
  @IsString()
  slug: string;

  @IsString()
  @IsNotEmpty()
  first_name: string;

  @IsString()
  middle_name: string;

  @IsString()
  @IsNotEmpty()
  last_name: string;

  @IsPhoneNumber()
  @IsNotEmpty()
  phone_number: string;

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
}
