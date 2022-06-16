import { Module } from '@nestjs/common';
import { ClientService } from './Client.service';

@Module({
  providers: [ClientService],
  exports: [ClientService],
})
export class ClientModule {};