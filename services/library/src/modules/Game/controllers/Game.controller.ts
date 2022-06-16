import { Controller, UseGuards } from '@nestjs/common';
import { GameService } from '../services';
import { GameServiceController, GameServiceControllerMethods } from '@proto/LibraryService';
import { CreateRequest } from '@proto/types/metadata/GameService';
import { Game } from '@proto/types/game';
import { TokenAccess } from '@guards';
import { Data, User as UserData } from '@shared/decorators';
import { User } from '@shared/interfaces/proto/types/user';
import { Token } from '@shared/interfaces/proto/types/token';
import { Metadata } from '@grpc/grpc-js';
import { GamesListService } from 'src/modules/GamesList/services';
import { RpcException } from '@nestjs/microservices';
import { UsersClientService } from '@shared/modules/UsersClient/services';
import { firstValueFrom } from 'rxjs';

@Controller()
@GameServiceControllerMethods()
export class GameController implements GameServiceController {
  constructor(
    private readonly service: GameService,
    private readonly gameListService: GamesListService,

    private readonly usersClient: UsersClientService,
  ) {}
  
  // create
  @UseGuards(TokenAccess)
  async create(
    @Data()
    data: CreateRequest,
    metadata: Metadata,
    
    @UserData()
    user?: { user: User, token: Token },
  ): Promise<Game> {
    return await this.service.prepareGameObject(await this.service.create(
      data,
      user?.user,
    ));
  };

  // update
  @UseGuards(TokenAccess)
  async update(
    @Data()
    data: Game,
    metadata: Metadata,

    @UserData()
    user?: { user: User, token: Token },
  ): Promise<Game> {
    // Checking if this game belongs to this user
    const game = (await this.gameListService.findMany({ id: data.id }))[0];
    if (user && game.creator != null) {
      // Fetching creator
      const creator = await firstValueFrom(this.usersClient.users.findOne({ id: game.creator }, null));

      if (creator && user?.user?.id != creator.id) throw new RpcException('You do not have access to update this game');
    };

    return await this.service.prepareGameObject(await this.service.update(data.id, data));
  };
};