import { Metadata } from '@grpc/grpc-js';
import { Injectable, Inject, OnModuleInit } from '@nestjs/common';
import { ClientGrpc } from '@nestjs/microservices';
import { Token, TokenType } from '@shared/interfaces/proto/types/token';
import { User } from '@shared/interfaces/proto/types/user';
import { TokenServiceClient, UserServiceClient } from '@shared/interfaces/proto/UsersService';
import { firstValueFrom } from 'rxjs';

@Injectable()
export class TokenAccessService implements OnModuleInit {
  private usersService: UserServiceClient;
  private tokenService: TokenServiceClient;
  
  constructor(
    @Inject('bluk.games')
    private client: ClientGrpc,
  ) {}

  // Getting clients
  onModuleInit() {
    this.tokenService = this.client.getService<TokenServiceClient>('TokenService');
    this.usersService = this.client.getService<UserServiceClient>('UserService');
  }

  public async doTokenExists(tokenId: string): Promise<boolean> {
    // Checking if this token is system token
    if (tokenId == process.env.SYSTEM_TOKEN) {
      return true;
    };

    // Checking if this token is cloud.odzi.dog token
    if (tokenId.includes('odzi-dog')) {
      return true;
    } else {
      // Checking if this token exists
      return await firstValueFrom(this.tokenService.fetchToken({ id: tokenId }, new Metadata())) == null ? false : true;
    };
  };

  public async getSession(tokenId: string): Promise<{ user: User, token: Token }> {
    if (tokenId == process.env.SYSTEM_TOKEN) return;

    // Checking if this token is cloud.odzi.dog token
    if (tokenId.includes('odzi-dog')) {
      // Generating token
      const metadata = new Metadata()
      metadata.add('token', process.env.SYSTEM_TOKEN);
      
      const token = await firstValueFrom(this.tokenService.generateToken(
        {
          type: TokenType.USER,
          entityId: tokenId,
          permissions: [],
        },
        metadata,
        ));
      
      // Fetching user
      const user = await firstValueFrom(this.usersService.findOne({ id: token.entityId }, new Metadata()));

      return {
        user,
        token,
      };
    } else {
      // Fetching token
      const token = await firstValueFrom(this.tokenService.fetchToken({ id: tokenId }, new Metadata()));

      // Fetching user
      const user = await firstValueFrom(this.usersService.findOne({ id: token.entityId }, new Metadata()));
    
      return {
        user,
        token,
      };
    };
  };

  public authorizeAuthToken(token: string) {
    
  };
};

// odzi-dog/VllD4g0kaH2Y13N3