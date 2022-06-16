import { Injectable, Inject, OnModuleInit } from '@nestjs/common';
import { ClientGrpc } from '@nestjs/microservices';
import { UserServiceClient } from '@shared/interfaces/proto/UsersService';

@Injectable()
export class UsersClientService implements OnModuleInit {
  public users: UserServiceClient;
  
  constructor(
    @Inject('bluk.games')
    private client: ClientGrpc,
  ) {}
  
  onModuleInit() {
    this.users = this.client.getService<UserServiceClient>('UserService');
  }
};