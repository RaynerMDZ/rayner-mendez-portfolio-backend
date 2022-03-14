import {
  Controller,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Put,
  UploadedFile,
  UseInterceptors,
  UploadedFiles,
  UseGuards,
} from '@nestjs/common';
import { CreateUserDto } from '../user/dto/create-user.dto';
import { UpdateUserDto } from '../user/dto/update-user.dto';
import { AdminService } from './admin.service';
import { AnyFilesInterceptor, FileInterceptor } from '@nestjs/platform-express';
import { memoryStorage } from 'multer';
import { CreatePostDto } from '../post/dto/create-post.dto';
import { UpdatePostDto } from '../post/dto/update-post.dto';
import { JwtGuard } from '../auth/guard/jwt.guard';

@UseGuards(JwtGuard)
@Controller('v1/admin')
export class AdminController {
  constructor(private readonly adminService: AdminService) {}

  // User
  @Post('users/create-user')
  async createUser(@Body() dto: CreateUserDto) {
    return await this.adminService.createUser(dto);
  }

  @Put('users/:user_id/update-user')
  async updateUser(
    @Param('user_id') userId: string,
    @Body() dto: UpdateUserDto,
  ) {
    return 'working';
    return await this.adminService.updateUser(userId, dto);
  }

  @Patch('users/:user_id/update-password')
  async updateUserPassword(
    @Body() password: string,
    @Param('user_id') userId: string,
  ) {
    return 'Working';
    return await this.adminService.updateUserPassword(userId, password);
  }

  @Patch('users/:user_id/update-password')
  async updateUserEmail(
    @Body() email: string,
    @Param('user_id') userId: string,
  ) {
    return await this.adminService.updateUserEmail(userId, email);
  }

  @UseInterceptors(
    FileInterceptor('image', {
      storage: memoryStorage(),
      limits: { fieldSize: 5000000 },
    }),
  )
  @Patch('users/user_id/picture/:picture_id/update-user-picture')
  async updateUserPicture(
    @Param('user_id') userId: string,
    @Param('picture_id') pictureId: string,
    @UploadedFile() image: Express.Multer.File,
  ) {
    return await this.adminService.updateUserPicture(userId, pictureId, image);
  }

  // Post
  @Post('users/user_id/posts/create-post')
  async createPost(
    @Param('user_id') userId: string,
    @Body() dto: CreatePostDto,
  ) {
    // return await this.adminService.createPost(userId, dto);
  }

  @Post('users/user-id/posts/:post-id/update-post')
  async updatePost(
    @Param('user-id') userId: string,
    @Param('post-id') postId: string,
    dto: UpdatePostDto,
  ) {
    return await this.adminService.updatePost(userId, postId, dto);
  }

  @UseInterceptors(
    AnyFilesInterceptor({
      storage: memoryStorage(),
      limits: { fieldSize: 5000000 },
    }),
  )
  @Patch('users/user-id/posts/post-id/add-post-pictures')
  async addPostPictures(
    @Param('user-id') userId: string,
    @Param('post-id') postId: string,
    @UploadedFiles() images: Array<Express.Multer.File>,
  ) {
    return await this.adminService.addPostPictures(userId, postId, images);
  }

  @UseInterceptors(
    FileInterceptor('image', {
      storage: memoryStorage(),
      limits: { fieldSize: 5000000 },
    }),
  )
  @Put('users/:user-id/posts/:post-id/pictures/:picture-id')
  async updatePostPicture(
    @Param('user-id') userId: string,
    @Param('post-id') postId: string,
    @Param('picture-id') pictureId: string,
    @UploadedFile() image: Express.Multer.File,
  ) {
    return await this.adminService.updatePostPicture(
      userId,
      postId,
      pictureId,
      image,
    );
  }
}
