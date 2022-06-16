import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { ClientProxyFactory, Transport } from '@nestjs/microservices';
import { join } from 'path';

import * as Services from './services';

@Module({
  imports: [
    ConfigModule.forRoot(),
  ],
  providers: [
    {
      provide: 'bluk.games',
      async useFactory() {
        // @ts-ignore
        return ClientProxyFactory.create({
          transport: Transport.GRPC,
          options: {
            url: '0.0.0.0:5000',
            package: ["bluk.games", "grpc.reflection.v1alpha"],
            protoPath: [join(__dirname, 'proto', 'UsersService.proto'), join(__dirname, 'proto', 'types', 'reflection', 'reflection.proto')],
            loader: {
              includeDirs: [join(__dirname, 'proto')]
            }
          },
        });
      }
    },
  
    ...Object.values(Services)
  ],
  exports: [...Object.values(Services)],
})
export class TokenAccessGuardModule {};