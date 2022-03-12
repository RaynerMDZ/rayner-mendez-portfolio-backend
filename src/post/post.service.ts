import { Injectable } from '@nestjs/common';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';

@Injectable()
export class PostService {
  async create(createPostDto: CreatePostDto) {
    return await 'This action adds a new post';
  }

  async findAll() {
    return await`This action returns all post`;
  }

  async findOne(id: string) {
    return await `This action returns a #${id} post`;
  }

  async update(id: string, updatePostDto: UpdatePostDto) {
    return await`This action updates a #${id} post`;
  }

  async remove(id: string) {
    return await `This action removes a #${id} post`;
  }
}
