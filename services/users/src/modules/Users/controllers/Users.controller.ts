import { Controller, UseGuards } from '@nestjs/common';
import { FetchMeRequest, FetchMeResponse, FindOneUserRequest, UserServiceController, UserServiceControllerMethods } from '@proto/UsersService';
import { User } from '@proto/types/user';
import { RpcException } from '@nestjs/microservices';
import { UsersService } from '../services';
import { AuthToken, Token } from '@proto/types/token';
import { TokenAccess } from '@guards';
import { Data, User as UserData } from '@decorators';
import { Metadata } from '@grpc/grpc-js';
import { AuthorizeAuthTokenRequest, WatchAuthTokenRequest } from '@shared/interfaces/proto/types/metadata/UsersService';
import { Observable, Subject } from 'rxjs';
import { AuthTokenService } from 'src/modules/Tokens/services';

@Controller()
@UserServiceControllerMethods()
export class UsersController implements UserServiceController {
  constructor(
    private readonly userService: UsersService,
    private readonly authTokenService: AuthTokenService,
  ) {}
  
  async findOne(data: FindOneUserRequest): Promise<User> {
    const user = await this.userService.findById(data.id);
    if (!user) throw new RpcException('User not found');

    return user;
  };

  @UseGuards(TokenAccess)
  async fetchMe(
    @Data()
    data: FetchMeRequest,
    metadata: Metadata,

    @UserData()
    user: { user: User, token: Token }
  ): Promise<FetchMeResponse> {
    return user;
  };

  // Auth-token related
  async createAuthToken(): Promise<AuthToken> {
    return await this.authTokenService.create();
  };

  watchAuthToken(request: WatchAuthTokenRequest): Observable<AuthToken> {
    const subject = new Subject<AuthToken>();

    // Sending first token
    const firstFetch = async () => {
      const token = await this.authTokenService.fetchById(request.id);
      console.log('fetched token:', token);
      if (token) subject.next(token);
    };

    firstFetch();
    
    const watcher = this.authTokenService.getModelWatcher()
    watcher.on('change', (change) => {
      if (change.fullDocument?.id == request.id) {
        subject.next(change.fullDocument);
      };
    });

    return subject.asObservable();
  };

  @UseGuards(TokenAccess)
  async authorizeAuthToken(
    @Data()
    request: AuthorizeAuthTokenRequest,
    metadata: Metadata,

    @UserData()
    session: { user: User, token: Token },
  ): Promise<AuthToken> {
    // Authorizing token
    const token = await this.authTokenService.fetchById(request.id);
    if (!token) throw new RpcException('AuthToken not found');

    // Checking if we can authorize this token
    if (!token.isAuthorized) {
      return await this.authTokenService.authorize(token.id, session.user.id);
    } else {
      throw new RpcException('This AuthToken is already authorized');
    };
  };
};