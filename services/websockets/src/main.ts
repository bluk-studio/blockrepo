import { NestFactory } from '@nestjs/core';
import { ApplicationModule } from 'src/modules/Application/module';
import { WsAdapter } from '@nestjs/platform-ws';

async function bootstrap() {
  const app = await NestFactory.create(ApplicationModule);
  app.useWebSocketAdapter(new WsAdapter(app));

  await app.listen(3000);
};

bootstrap();
