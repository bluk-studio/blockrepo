import { Injectable } from '@nestjs/common';
import { Cron, CronExpression } from '@nestjs/schedule';

@Injectable()
export class HealthChecker {
  @Cron(CronExpression.EVERY_SECOND)
  handleCron() {
    console.warn('Implement health checker!');
  };
};