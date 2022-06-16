import { Module, forwardRef } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { GameSchema } from 'src/types';
import { GameModule } from '../Game/module';

import * as Controllers from './controllers';
import * as Services from './services';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: 'Game',
        schema: GameSchema,
      },
    ]),

    forwardRef(() => GameModule),
  ],
  controllers: [...Object.values(Controllers)],
  providers: [...Object.values(Services)],
  exports: [...Object.values(Services)],
})
export class GamesListModule {};