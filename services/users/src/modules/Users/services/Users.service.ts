import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from 'mongoose';
import { UserDocument } from "src/types";
import { User } from '@proto/types/user';
import { uuid } from 'uuidv4';

@Injectable()
export class UsersService {
  constructor(
    @InjectModel('User')
    private readonly userModel: Model<UserDocument>,
  ) {}

  // findById
  public async findById(id: string): Promise<User> {
    return await this.userModel.findOne({ id });
  };

  // findByEmail
  public async findByEmail(email: string): Promise<User> {
    return await this.userModel.findOne({ email });
  };

  // create
  public async create(email: string, username?: string): Promise<User> {
    // Creating new user
    const user = new this.userModel({
      id: uuid(),
      email,
      username,
    });

    return await user.save();
  };
};