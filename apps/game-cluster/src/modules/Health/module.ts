import { Module } from '@nestjs/common';
import { ScheduleModule } from '@nestjs/schedule';

import * as Services from './services';

@Module({
  imports: [
    ScheduleModule.forRoot(),
  ],

  providers: [...Object.values(Services)],
  exports: [...Object.values(Services)]
})
export class HealthModule {};