import { Injectable, Logger, OnApplicationBootstrap } from "@nestjs/common";
import { Cron, CronExpression } from '@nestjs/schedule';
import * as Docker from 'dockerode';
import { HealthService } from "src/modules/Health/services";

@Injectable()
export class DockerInstanceService implements OnApplicationBootstrap {
  // Docker information
  public instance: Docker;
  private logger = new Logger(DockerInstanceService.name); 

  constructor(
    private readonly healthService: HealthService,
  ) {}

  onApplicationBootstrap() {
    // Creating docker instance
    this.instance = new Docker({
      host: process.env.DOCKER_HOST,
      port: Number(process.env.DOCKER_PORT),
    });
  };

  // Docker checker
  @Cron(CronExpression.EVERY_SECOND)
  async handleInstanceCheck() {
    this.instance.ping()
    .then(() => {
      this.healthService.update({ isReady: true });
    })
    .catch(() => {
      this.logger.error("Docker instance isn't available");
      this.healthService.update({ isReady: false });
    });
  };
};