import { PartialType } from '@nestjs/mapped-types';
import { CreateUserDto } from './create-user.dto';

export class UpdateUserDto extends PartialType(CreateUserDto) {
  slug: string;
  first_name: string;
  middle_name: string;
  last_name: string;
  phone_number: string;
  summary: string;
  github: string;
  linkedin: string;
  twitter: string;
  created_date: Date;
  modified_date: Date;
}
