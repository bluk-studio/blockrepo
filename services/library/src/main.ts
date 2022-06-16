import { NestFactory } from '@nestjs/core';
import { ApplicationModule } from 'src/modules/Application/module';
import { GrpcOptions, getServiceOptions } from '@shared/configs';
import { join } from 'path';
import { Transport } from '@nestjs/microservices';

// Bootstrap function
async function bootstrap() {
  // Creating microservice
  const app = await NestFactory.create(ApplicationModule);

  // Service options
  const options = getServiceOptions(process.env.SERVICE);
  if (!options) throw new Error('Could not get service options');

  app.connectMicroservice({
    transport: Transport.GRPC,
    options: {
      url: '0.0.0.0:5000',
      package: ["bluk.games", "grpc.reflection.v1alpha"],
      protoPath: [join(__dirname, 'proto', 'LibraryService.proto'), join(__dirname, 'proto', 'types', 'reflection', 'reflection.proto')],
      loader: {
        includeDirs: [join(__dirname, 'proto')]
      }
    },
  });

  await app.startAllMicroservices();
  await app.listen(3000);
};

bootstrap();