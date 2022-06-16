import { NestFactory } from '@nestjs/core';
import { ApplicationModule } from 'src/modules/Application/module';
import { GrpcOptions, getServiceOptions } from '@shared/configs';

// Bootstrap function
async function bootstrap() {
  // Creating microservice
  const app = await NestFactory.create(ApplicationModule);

  // Service options
  const options = getServiceOptions(process.env.SERVICE);
  if (!options) throw new Error('Could not get service options');

  app.connectMicroservice(await GrpcOptions(`localhost:${ options.port }`));

  await app.startAllMicroservices();
  await app.listen(options.port);
};

bootstrap();