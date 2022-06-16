import { Module, forwardRef } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { TokenAccessGuardModule } from '@shared/modules/TokenAccess/module';
import { UserSchema } from 'src/types';
import { TokensModule } from '../Tokens/module';

import * as Controllers from './controllers';
import * as Services from './services';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: 'User',
        schema: UserSchema,
      }
    ]),

    forwardRef(() => TokensModule),
    TokenAccessGuardModule
  ],
  controllers: [...Object.values(Controllers)],
  providers: [...Object.values(Services)],
  exports: [...Object.values(Services)],
})
export class UsersModule {};