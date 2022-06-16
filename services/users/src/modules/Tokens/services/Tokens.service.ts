import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { TokenDocument } from 'src/types';
import { Model } from 'mongoose';
import { Token, TokenType } from '@proto/types/token';
import { GenerateTokenRequest } from '@proto/UsersService';
import { gql, request } from 'graphql-request';
import { RpcException } from '@nestjs/microservices';
import { UsersService } from 'src/modules/Users/services';
import { getRandomString } from 'src/helpers';
import { Permission } from '@proto/types/permissions';

@Injectable()
export class TokensService {
  constructor(
    @InjectModel('Token')
    private readonly tokenModel: Model<TokenDocument>,

    private readonly userService: UsersService,
  ) {}

  // fetchById
  public async fetchById(id: string): Promise<Token> {
    return await this.tokenModel.findOne({ id });
  };

  // create
  public async create(type: TokenType, entityId: string, permissions?: Permission[]): Promise<Token> {
    const token = new this.tokenModel({
      id: getRandomString(15),
      type,
      entityId,
      permissions: permissions ?? [],
    });

    return await token.save();
  };

  // generateToken
  public async generateToken(token: string, data: GenerateTokenRequest): Promise<Token> {
    // Checking if we need to generate token from cloud.odzi.dog token
    if (data.entityId.includes('odzi-dog')) {
      return await this.generateFromAuth(data.entityId);
    } else {
      // Generating token
    };
  };

  // generateFromAuth
  private async generateFromAuth(tokenId: string): Promise<Token> {
    // Getting token
    tokenId = tokenId.replace('odzi-dog/', '');

    // Getting user email from cloud.odzi.dog
    const query = gql`
      query FetchToken($token: String!) {
        fetchToken(secret: $token) {
          profile {
            email
          }
        }
      }
    `;

    const response = await request(
      'https://api.cloud.odzi.dog/graphql',
      query,
      { token: tokenId },
    );

    const email = response?.fetchToken?.profile?.email;
    if (!email) throw new RpcException('Server Error');

    // Checking if user exists
    let user = await this.userService.findByEmail(email);

    if (!user) {
      // Creating user
      user = await this.userService.create(email);
    };

    // Generating new token
    // +todo default permissions
    const token = await this.create(TokenType.USER, user.id, []);

    // Returning token
    return token;
  };
};