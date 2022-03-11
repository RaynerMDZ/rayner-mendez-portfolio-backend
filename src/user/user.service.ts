import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { DatabaseService } from '../database/database.service';
import { User } from './entities/user.entity';

@Injectable()
export class UserService {
  constructor(private readonly database: DatabaseService) {}

  async create(createUserDto: CreateUserDto): Promise<User> {
    try {
      return await this.database.user.create({ data: createUserDto });
    } catch (err) {
      console.log(err);
    }
  }

  async findAll(): Promise<User[]> {
    try {
      return await this.database.user.findMany();
    } catch (err) {
      console.log(err);
    }
  }

  async findOne(id: string): Promise<User> {
    try {
      return await this.database.user.findUnique({ where: { id: id } });
    } catch (err) {
      console.log(err);
    }
  }

  async update(id: string, updateUserDto: UpdateUserDto): Promise<User> {
    try {
      return await this.database.user.update({
        where: { id: id },
        data: updateUserDto,
      });
    } catch (err) {
      console.log(err);
    }
  }

  async remove(id: string): Promise<User> {
    try {
      return this.database.user.delete({
        where: { id: id },
      });
    } catch (err) {
      console.log(err);
    }
  }
}
