import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { ClientProxyFactory } from '@nestjs/microservices';
import { GrpcOptions } from '@shared/configs';

import * as Services from './services';

@Module({
  imports: [
    ConfigModule.forRoot(),
  ],
  providers: [
    {
      provide: 'zurich_cluster',
      useFactory: async () => {
        // @ts-ignore
        return ClientProxyFactory.create(await GrpcOptions('localhost:5002'));
      },
    },

    ...Object.values(Services)
  ],
  exports: [...Object.values(Services)],
})
export class ClustersClientsModule {};