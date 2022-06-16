import { Injectable } from '@nestjs/common';
import { Server, ServerHealth } from '@proto/types/cluster/server';
import { DockerInstanceService } from 'src/modules/DockerInstance/services';

// ServerController class
export class ServerController {
  public containerId: string;

  constructor(
    // Services
    private dockerService: DockerInstanceService,

    // Information
    public info: Server,
  ) {};

  // Server controls
  // - start
  async start() {
    if (this.containerId) return;

    // Starting container
    this.dockerService.instance.createContainer({
      Image: 'bluk.jfrog.io/default-docker-local/game-node',
      name: `server-${this.info.id}`,
      Env: [
        `CLUSTER_NAME=zurich`,
        `SERVER_PORT=${ this.info.port }`,
        `SERVER_UUID=${ this.info.id }`,
        `SERVER_IMAGE_URL=${ this.info.image }`
      ],
    }).then((container) => {
      console.log('start container');
      this.containerId = container.id;
      container.start();
    });
  };

  // - stop
  // - delete
  // - handleHealthCheck
  async handleHealthCheck() {
    // Checking server's health...
    if (!this.containerId) return;

    const container = this.dockerService.instance.getContainer(this.containerId);
  
    container.inspect()
    .then(({ State }) => {
      if (State.Running != true) {
        // Deleting this container and updating this server's
        // information
        container.remove();
        this.containerId = null;

        // Updating server health
        this.updateHealth({ isRunning: false });
      } else {
        this.updateHealth({ isRunning: true });
      };
    });
  };

  updateHealth(newHealth: Partial<ServerHealth>) {
    this.info.health = {
      ...this.info.health,
      ...newHealth,
    };
  };
};

@Injectable()
export class OneServerService {
  constructor(
    private dockerService: DockerInstanceService,
  ) {}

  // Create ServerController for server
  createForServer(server: Omit<Server, 'health'>): ServerController {
    return new ServerController(
      this.dockerService,

      {
        ...server,
        health: {
          isReady: false,
          isRunning: true,
        }
      },
    );
  };
};