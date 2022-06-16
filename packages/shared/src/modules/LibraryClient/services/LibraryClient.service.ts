import { Injectable, Inject, OnModuleInit } from '@nestjs/common';
import { ClientGrpc } from '@nestjs/microservices';
import { GameServiceClient, GamesListServiceClient } from '@shared/interfaces/proto/LibraryService';

@Injectable()
export class LibraryClientService implements OnModuleInit {
  public gameClient: GameServiceClient;
  public gamesListClient: GamesListServiceClient;

  constructor(
    @Inject('bluk.games')
    private client: ClientGrpc,
  ) {};

  onModuleInit() {
    this.gameClient = this.client.getService<GameServiceClient>('GameService');
    this.gamesListClient = this.client.getService<GamesListServiceClient>('GamesListService');
  };
};