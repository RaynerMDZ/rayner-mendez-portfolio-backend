import { IsNotEmpty, IsPhoneNumber, IsString } from 'class-validator';

export class CreateUserDto {
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
}
