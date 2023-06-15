import { Injectable } from '@nestjs/common';
import { IUser } from './types/User';
import { InjectModel } from '@nestjs/mongoose';
import { User } from './schemas/user.schema';
import { Model } from 'mongoose';
import { CreateUserDto } from './dto/user.dto';

@Injectable()
export class UsersService {
  constructor(@InjectModel(User.name) private userModel: Model<User>) {}
  private readonly users: IUser[] = [
    {
      id: 1,
      email: 'johndoe@gmail.com',
      username: 'johndoe',
      password: '123',
    },
    {
      id: 2,
      email: 'billgates@gmail.com',
      username: 'billgates',
      password: '123',
    },
    {
      id: 3,
      email: 'elonmusk@gmail.com',
      username: 'elonmusk',
      password: '123',
    },
  ];

  async findOne(username: string): Promise<IUser | undefined> {
    return this.users.find((user) => user.username === username);
  }

  async createUser(createUserDto: CreateUserDto): Promise<User> {
    const createdUser = new this.userModel(createUserDto);
    return createdUser.save();
  }
}
