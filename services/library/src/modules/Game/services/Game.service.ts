import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { CreateRequest } from "@proto/types/metadata/GameService";
import { Game } from "@proto/types/game";
import { GameDocument, GameModel } from "src/types";
import { Model } from 'mongoose';
import { RpcException } from "@nestjs/microservices";
import { uuid } from "uuidv4";
import { User } from "@shared/interfaces/proto/types/user";
import { UsersClientService } from "@shared/modules/UsersClient/services";
import { firstValueFrom } from "rxjs";
import { Metadata } from '@grpc/grpc-js';

@Injectable()
export class GameService {
  constructor(
    @InjectModel('Game')
    private readonly gameModel: Model<GameDocument>,

    private readonly usersClient: UsersClientService,
  ) {}

  public async create(
    dto: CreateRequest,
    user?: User,
  ): Promise<GameModel> {
    const game = new this.gameModel({
      id: uuid(),
      name: dto.name,
      creator: user.id,
    });

    return await game.save();
  };

  public async update(gameId: string, dto: Game): Promise<GameModel> {
    const game = await this.gameModel.findOne({ id: gameId });
    if (!game) throw new RpcException('Game not found');

    // Omitting some fields in dto
    const { id, creator, ...updatedObject } = dto;

    // Updating game
    await game.updateOne({
      ...game.toObject(),
      ...updatedObject,
    });

    return game.save();
  };

  public async prepareGameObject(game: GameModel): Promise<Game> {
    // Fetching creator
    let creator = undefined;
    if (game.creator) {
      creator = await firstValueFrom(this.usersClient.users.findOne({ id: game.creator }, new Metadata()));
    };

    return {
      ...game,
      creator,
    }
  };
};