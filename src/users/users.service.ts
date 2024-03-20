import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
// import { UpdateUserDto } from './dto/update-user.dto';
import { hash } from 'bcryptjs';
import { PrismaService } from 'src/prisma/prisma.service';
import { User } from '@prisma/client';

@Injectable()
export class UsersService {
  constructor(private readonly repository: PrismaService) {}
  async create(createUserDto: CreateUserDto): Promise<User> {
    const { name, email, password } = createUserDto;

    const emailExisting = await this.getByEmail(email);

    if (emailExisting) {
      throw new BadRequestException('Email already exists');
    }

    const passwordHashed = await hash(password, 8);

    const createdUser = await this.repository.user.create({
      data: {
        name,
        email,
        password: passwordHashed,
      },
    });

    return {
      ...createdUser,
      password: undefined,
    };
  }

  async findAll() {
    return `This action returns all users`;
  }

  async findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  // async update(id: number, updateUserDto: UpdateUserDto) {
  //   return `This action updates a #${id} user`;
  // }

  async remove(id: number) {
    return `This action removes a #${id} user`;
  }

  private async getByEmail(email: string, id?: string) {
    return await this.repository.user.findFirst({
      where: {
        email,
        id: { not: id },
      },
    });
  }
}
