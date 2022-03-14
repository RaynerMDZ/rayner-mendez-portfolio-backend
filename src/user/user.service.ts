import { ConflictException, Injectable, Logger, NotFoundException } from "@nestjs/common";
import { DatabaseService } from '../database/database.service';
import { UpdateUserDto } from './dto/update-user.dto';
import { CreateUserDto } from './dto/create-user.dto';

@Injectable()
export class UserService {
  private readonly logger: Logger;
  constructor(private readonly database: DatabaseService) {
    this.logger = new Logger('User Service');
  }

  async getUser(id: string) {
    const user = await this.database.user.findUnique({ where: { id: id } });

    if (!user) throw new NotFoundException(`User with id: ${id} not found.`);

    return user;
  }

  async getUserPosts(userId: string, page: number, pageSize: number) {
    const user = await this.getUser(userId);

    return await this.database.post.findMany({
      where: { user_id: user.id },
      skip: page,
      take: pageSize,
    });
  }

  async getUserPost(userId: string, postId: string) {
    const user = await this.getUser(userId);
    return await this.database.user.findUnique({
      where: { id: user.id },
      select: { posts: { where: { id: postId } } },
    });
  }

  async getUserSKills(userId: string) {
    const user = await this.getUser(userId);
    return await this.database.user.findUnique({
      where: { id: user.id },
      select: { skills: true },
    });
  }

  async getUserEducation(userId: string) {
    const user = await this.getUser(userId);
    return await this.database.user.findUnique({
      where: { id: user.id },
      select: { educations: true },
    });
  }

  async getUserEmployment(userId: string) {
    const user = await this.getUser(userId);
    return await this.database.user.findUnique({
      where: { id: user.id },
      select: { employments: true },
    });
  }

  async createUser(dto: CreateUserDto) {
    const {
      id,
      slug,
      firstName,
      middleName,
      lastName,
      phoneNumber,
      location,
      summary,
      github,
      linkedin,
      twitter,
      resumeUrl,
    } = dto;

    try {
      return await this.database.user.create({
        data: {
          id: id,
          slug: slug,
          first_name: firstName,
          middle_name: middleName,
          last_name: lastName,
          phone_number: phoneNumber,
          location: location,
          summary: summary,
          github: github,
          linkedin: linkedin,
          twitter: twitter,
          resume_url: resumeUrl,
        },
      });
    } catch (err) {
      this.logger.error(`User with id: ${id} already exists.`);
      throw new ConflictException(`User with id: ${id} already exists.`);
    }
  }

  async updateUser(userId: string, dto: UpdateUserDto) {
    return false;
  }

  async updateUserPassword(userId: string, password: string) {
    return false;
  }

  async updateUserEmail(userId: string, email: string) {
    return false;
  }

  async updateUserPicture(
    userId: string,
    pictureId: string,
    image: Express.Multer.File,
  ) {
    // return await this.pictureService.updateUserPicture(
    //   userId,
    //   pictureId,
    //   image,
    // );
    return false;
  }
}
