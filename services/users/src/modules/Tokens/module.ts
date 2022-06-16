import { Module, forwardRef } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthTokenSchema, TokenSchema } from 'src/types';
import { UsersModule } from '../Users/module';

import * as Controllers from './controllers';
import * as Services from './services';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: 'Token',
        schema: TokenSchema,
      },
      {
        name: 'AuthToken',
        schema: AuthTokenSchema,
      }
    ]),

    forwardRef(() => UsersModule)
  ],
  controllers: [...Object.values(Controllers)],
  providers: [...Object.values(Services)],
  exports: [...Object.values(Services)],
})
export class TokensModule {};