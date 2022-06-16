import { Inject, Logger } from '@nestjs/common';
import { ClientGrpc } from '@nestjs/microservices';
import { OnGatewayInit, WebSocketGateway, WsException } from '@nestjs/websockets';
import { firstValueFrom } from 'rxjs';
import { isAction } from 'src/helpers';
import { IAction, ActionRequest } from 'src/types';
import { Server } from 'ws';
import { UserServiceClient } from '@proto/UsersService';
import { Metadata } from '@grpc/grpc-js';

@WebSocketGateway(3001)
export class UsersGatewayService implements OnGatewayInit {
  private logger = new Logger(UsersGatewayService.name);
  public service: UserServiceClient;

  constructor(
    @Inject('bluk_games_users')
    private grpcClient: ClientGrpc,
  ) {}

  afterInit(server: Server) {
    // UserService-related
    this.service = this.grpcClient.getService<UserServiceClient>('UserService');

    // Server-related
    server.on('connection', (connection) => {
      connection.on('message', (message) => {
        console.log('message received:', message);
        // Parsing message as json
        try {
          const action: IAction = JSON.parse(message.toString());
          if (!isAction(action)) throw new WsException('Invalid action submitted');

          // Performing this action
          // +todo some kind of guards?
          this[action.function](new ActionRequest(action, connection), ...(action.arguments?.length > 0 ? action.arguments : []));
        } catch(error) {
          this.logger.error('Something went wrong while processing action', message, error);
        };
      });
    });
  };

  
  async createAuthToken(action: ActionRequest) {
    const token = await firstValueFrom(this.service.createAuthToken({}, new Metadata()));

    console.log('response with token:', token);
    action.reply(token);
  };
};