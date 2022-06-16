import { Module } from '@nestjs/common';
import { HealthModule } from '../Health/module';
import { ConfigModule } from '@nestjs/config';

import * as Services from './services';

@Module({
  imports: [
    ConfigModule.forRoot(),
  
    HealthModule
  ],
  providers: [...Object.values(Services)],
  exports: [...Object.values(Services)],
})
export class DockerInstanceModule {};