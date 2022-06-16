import { forwardRef, Module } from '@nestjs/common';
import { ScheduleModule } from '@nestjs/schedule';
import { DockerInstanceModule } from '../DockerInstance/module';

import * as Services from './services';

@Module({
  imports: [
    ScheduleModule.forRoot(),
    
    DockerInstanceModule,
  ],
  providers: [...Object.values(Services)],
  exports: [...Object.values(Services)],
})
export class ServersModule {};