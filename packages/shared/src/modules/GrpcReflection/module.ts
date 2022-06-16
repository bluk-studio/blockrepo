import { DynamicModule, Module } from '@nestjs/common';
import { GrpcOptions } from '@nestjs/microservices';
import { GrpcReflectionController } from './GrpcReflection.controller';
import { GRPC_CONFIG_PROVIDER_TOKEN } from './constants';
import { GrpcReflectionService } from './GrpcReflection.service';

@Module({})
export class GrpcReflectionModule {
  static register(grpcOptions: GrpcOptions): DynamicModule {
    console.log('register dirname:', __dirname);
    console.log('options:', grpcOptions);

    return {
      module: GrpcReflectionModule,
      controllers: [GrpcReflectionController],
      providers: [
        GrpcReflectionService,
        {
          provide: GRPC_CONFIG_PROVIDER_TOKEN,
          useValue: grpcOptions,
        },
      ],
    };
  }
}
