import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import * as Modules from 'src/modules';

@Module({
  imports: [
    ConfigModule.forRoot(),
    ...Object.values(Modules),
  ],
})
export class ApplicationModule {}
