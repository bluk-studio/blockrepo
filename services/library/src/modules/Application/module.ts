import { Module } from '@nestjs/common';
import { Transport } from '@nestjs/microservices';
import { MongooseModule } from '@nestjs/mongoose';
import { GrpcReflectionModule } from '@shared/modules';
import { join } from 'path';

import * as Modules from 'src/modules';

@Module({
  imports: [
    GrpcReflectionModule.register({
      transport: Transport.GRPC,
      options: {
        url: '0.0.0.0:5001',
        package: ["bluk.games", "grpc.reflection.v1alpha"],
        protoPath: [join(__dirname, 'proto', 'LibraryService.proto'), join(__dirname, 'proto', 'types', 'reflection', 'reflection.proto')],
        loader: {
          includeDirs: [join(__dirname, 'proto')]
        }
      },
    }),
    MongooseModule.forRoot('mongodb+srv://paws:cRBPwQydO2p5hgQg@cluster0.03jyp.mongodb.net/bluk-games-library?retryWrites=true&w=majority'),

    ...Object.values(Modules),
  ],
})
export class ApplicationModule {}
