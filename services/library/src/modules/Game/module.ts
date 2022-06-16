import { Module, forwardRef } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { GameSchema } from 'src/types';
import { TokenAccessGuardModule } from '@shared/modules'
import { UsersClientModule } from '@shared/modules/UsersClient/module';

import * as Controllers from './controllers';
import * as Services from './services';
import { GamesListModule } from '../GamesList/module';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: 'Game',
        schema: GameSchema,
      }
    ]),

    TokenAccessGuardModule,
    forwardRef(() => GamesListModule),
    UsersClientModule,
  ],
  controllers: [...Object.values(Controllers)],
  providers: [...Object.values(Services)],
  exports: [...Object.values(Services)],
})
export class GameModule {};