import { Module } from '@nestjs/common';
import { ClustersClientsModule } from '@shared/modules/ClustersClients/module';

import * as Services from './services';

@Module({
  imports: [ClustersClientsModule],
  providers: [...Object.values(Services)],
  exports: [...Object.values(Services)],
})
export class HealthModule {};