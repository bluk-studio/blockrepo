import { Injectable } from '@nestjs/common';
import { Cron, CronExpression } from '@nestjs/schedule';
import { ManyServersService } from './ManyServers.service';

@Injectable()
export class ServersCheckerService {
  private isChecking: boolean;
  
  constructor(
    private serversService: ManyServersService,
  ) {}
  
  @Cron(CronExpression.EVERY_5_SECONDS)
  async handleCron() {
    if (this.isChecking) return;

    this.isChecking = true;

    // Checking
    for (const server of this.serversService.servers) {
      await server.handleHealthCheck();
    };

    this.isChecking = false;
  };
};