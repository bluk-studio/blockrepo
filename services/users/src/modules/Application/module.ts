import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { WebProxyModule } from '@shared/modules/WebProxy/module';
import { GrpcReflectionModule } from '@shared/modules';
import { Transport } from '@nestjs/microservices';
import { join } from 'path';

import * as Modules from 'src/modules';

@Module({
  imports: [
    GrpcReflectionModule.register({
      transport: Transport.GRPC,
      options: {
        url: '0.0.0.0:5000',
        package: ['bluk.games', 'grpc.reflection.v1alpha'],
        protoPath: [join(__dirname, 'proto', 'UsersService.proto'), join(__dirname, 'proto', 'types', 'reflection', 'reflection.proto')],
        loader: {
          includeDirs: [join(__dirname, 'proto')]
        }
      },
    }),
    MongooseModule.forRoot('mongodb+srv://paws:cRBPwQydO2p5hgQg@cluster0.03jyp.mongodb.net/bluk-games-library?retryWrites=true&w=majority'),

    ...Object.values(Modules),
    // WebProxyModule
  ],
})
export class ApplicationModule {}
