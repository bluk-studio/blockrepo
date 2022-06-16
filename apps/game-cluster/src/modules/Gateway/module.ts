import { Module } from '@nestjs/common';
import { HealthModule } from '../Health/module';
import { ServersModule } from '../Servers/module';

import * as Controllers from './controllers';

@Module({
  imports: [
    HealthModule,
    ServersModule,
  ],
  controllers: [...Object.values(Controllers)],
})
export class GatewayModule {};