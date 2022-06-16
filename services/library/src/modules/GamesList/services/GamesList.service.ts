import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { GameDocument } from 'src/types';
import { Model, FilterQuery } from 'mongoose';

@Injectable()
export class GamesListService {
  constructor(
    @InjectModel('Game')
    private readonly gameModel: Model<GameDocument>,
  ) {}

  async findMany(query: FilterQuery<GameDocument>) {
    return this.gameModel.find(query);
  };
};