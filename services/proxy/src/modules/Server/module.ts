import { Module } from '@nestjs/common';
import { ClientModule } from '../Client/module';

// Importing services
import { ServerService } from './Server.service';

@Module({
  imports: [ClientModule],
  providers: [ServerService],
  exports: [ServerService],
})
export class ServerModule {};