import {
  Controller,
  Post,
  Body,
  Patch,
  Param,
  Put,
  UploadedFile,
  UseInterceptors,
  UploadedFiles,
  UseGuards,
} from '@nestjs/common';
import { AdminService } from './admin.service';
import { AnyFilesInterceptor, FileInterceptor } from '@nestjs/platform-express';
import { memoryStorage } from 'multer';
import { JwtGuard } from '../auth/guard/jwt.guard';
import { EmailDto } from '../user/dto/email.dto';
import { PasswordDto } from '../user/dto/password.dto';
import { PostDto } from '../post/dto/post.dto';
import { UserDto } from '../user/dto/user.dto';
import { ImageDto } from '../image/dto/image.dto';


@Controller('v1/admin')
export class AdminController {
  constructor(private readonly adminService: AdminService) {}

  // User
  @UseGuards(JwtGuard)
  @Post('users')
  async createUser(@Body() dto: UserDto) {
    return await this.adminService.createOrUpdateUser(dto);
  }

  @Put('users')
  async updateUser(@Body() dto: UserDto) {
    return await this.adminService.createOrUpdateUser(dto);
  }

  @Patch('users/:user_id/update-password')
  async updateUserPassword(
    @Body() passwordDto: PasswordDto,
    @Param('user_id') userId: string,
  ) {
    return await this.adminService.updateUserPassword(userId, passwordDto);
  }

  @Patch('users/:user_id/update-email')
  async updateUserEmail(
    @Body() email: EmailDto,
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
  @Patch('users/:user_id/pictures')
  async updateUserPicture(@Param('user_id') userId: string, @Body() pictureDto: ImageDto, @UploadedFile() image: Express.Multer.File,) {
    return await this.adminService.createOrUpdateUserPicture(userId, pictureDto, image);
  }

  // Post
  @Post('users/user_id/posts')
  async createPost(
    @Param('user_id') userId: string,
    @Body() dto: PostDto,
  ) {
    // return await this.adminService.createPost(userId, dto);
  }

  @Put('users/user_id/posts/:post_id')
  async updatePost(
    @Param('user_id') userId: string,
    @Param('post_id') postId: string,
    dto: PostDto,
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
  @Put('users/:user-id/posts/:post-id/pictures/:image-id')
  async updatePostPicture(
    @Param('user-id') userId: string,
    @Param('post-id') postId: string,
    @Param('image-id') pictureId: string,
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
