import { Injectable } from '@nestjs/common';
import { RpcException } from '@nestjs/microservices';
import { InjectModel } from '@nestjs/mongoose';
import { AuthToken } from '@proto/types/token';
import { Model } from 'mongoose';
import { getRandomString } from 'src/helpers';
import { AuthTokenDocument } from 'src/types';

@Injectable()
export class AuthTokenService {
  constructor(
    @InjectModel('AuthToken')
    private readonly authTokenModel: Model<AuthTokenDocument>,
  ) {}

  // fetchById
  public async fetchById(id: string) {
    return await this.authTokenModel.findOne({ id });
  };

  // create
  public async create(): Promise<AuthToken> {
    const token = new this.authTokenModel({
      id: getRandomString(4),
    });

    return await token.save();
  };

  // authorize
  public async authorize(id: string, uid: string): Promise<AuthToken> {
    const token = await this.fetchById(id);
    if (!token) throw new RpcException('AuthToken not found');

    token.uid = uid;
    token.isAuthorized = true;
    await token.updateOne(token);

    return token;
  };

  // getModelWatcher
  public getModelWatcher() {
    return this.authTokenModel.watch<AuthToken>([], { fullDocument: 'updateLookup' });
  };
};