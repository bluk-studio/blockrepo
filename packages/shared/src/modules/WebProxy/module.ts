import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import * as Services from './services';

@Module({
  imports: [ConfigModule.forRoot()],
  providers: [...Object.values(Services)],
})
export class WebProxyModule {};