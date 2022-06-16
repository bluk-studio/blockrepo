import { NestFactory } from '@nestjs/core';
import { ApplicationModule } from 'src/modules/Application/module';
import { GenerateConfig } from '@shared/configs/grpc-options';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { join } from 'path';

// Bootstrap function
async function bootstrap() {
  // Creating microservice
  const app = await NestFactory.create(ApplicationModule);

  app.connectMicroservice<MicroserviceOptions>({
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

  await app.startAllMicroservices();
  await app.listen(3000);
};

bootstrap();