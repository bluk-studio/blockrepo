import { Controller } from '@nestjs/common';
import { RpcException } from '@nestjs/microservices';
import { GamesListServiceController, GamesListServiceControllerMethods } from '@proto/LibraryService';
import { FetchFeaturedResponse, GetOneById, SearchRequest, SearchResponse } from '@proto/types/metadata/GamesListService';
import { Game } from '@proto/types/game';
import { GameService } from 'src/modules/Game/services';
import { GamesListService } from '../services';

@Controller()
@GamesListServiceControllerMethods()
export class GamesListController implements GamesListServiceController {
  constructor(
    private readonly service: GamesListService,
    private readonly gameService: GameService,
  ) {}
  
  // search
  async search(data: SearchRequest): Promise<SearchResponse> {
    const games = await this.service.findMany({ 
      ...(data.tags?.length > 0 ? { tags: { $in: data.tags } } : {}),
    });

    const serializedGames: Game[] = [];

    // Preparing game objects
    for await (const game of games) {
      serializedGames.push(await this.gameService.prepareGameObject(game.toObject()));
    };

    return {
      result: serializedGames,
    };
  };

  // getOne
  async getOne(data: GetOneById): Promise<Game> {
    const results = await this.service.findMany({ id: data.id });

    if (results.length <= 0) {
      throw new RpcException('Game not found');
    } else {
      return await this.gameService.prepareGameObject(results[0].toObject());
    };
  };

  async fetchFeatured(): Promise<FetchFeaturedResponse> {
    return await this.search({ tags: ['featured'] });
  };
};