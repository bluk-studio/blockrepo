import { Module } from '@nestjs/common';
import { ClientProxyFactory } from '@nestjs/microservices';
import { GrpcOptions } from '@shared/configs';
import { UsersClientModule } from '@shared/modules/UsersClient/module';

import * as Services from './services';

@Module({
  providers: [
    {
      provide: 'bluk_games_users',
      async useFactory() {
        // @ts-ignore
        return ClientProxyFactory.create(await GrpcOptions('140.238.220.131:3005'));
      }
    },
  
    ...Object.values(Services)
  ],
})
export class UsersGatewayModule {};