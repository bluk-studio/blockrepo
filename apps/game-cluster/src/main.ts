import { NestFactory } from '@nestjs/core';
import { ApplicationModule } from 'src/modules/Application/module';
import { getServiceOptions, GrpcOptions } from '@shared/configs';

async function bootstrap() {
  // Creating app
  const app = await NestFactory.create(ApplicationModule);

  // Connection microservice
  const options = getServiceOptions(process.env.SERVICE);
  if (!options) throw new Error('Could not get service options');

  app.connectMicroservice(await GrpcOptions(`localhost:${ options.port }`));

  await app.startAllMicroservices();
  await app.listen(options.port);
};

bootstrap();
