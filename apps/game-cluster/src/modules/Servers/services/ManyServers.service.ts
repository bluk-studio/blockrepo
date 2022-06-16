import { Injectable } from '@nestjs/common';
import { CreateServerRequest } from '@proto/types/metadata/ClustersService';
import { OneServerService, ServerController } from './OneServer.service';
import { Server } from '@proto/types/cluster/server';
import { uuid } from 'uuidv4';
import { getPort } from 'get-port-please';

@Injectable()
export class ManyServersService {
  constructor(
    private serverService: OneServerService,
  ) {}

  // Currently running servers array
  public servers: Array<ServerController> = [];

  // create
  async create({ image, isPersistent }: CreateServerRequest): Promise<Server> {
    if (!this.isImageAvailable(image)) throw new Error("This image is unavailable");

    // Generating new server information
    const server = this.serverService.createForServer({
      id: uuid(),
      image: this.getImageUrl(image),
      port: await this.getAvailablePort(),
    });

    this.servers.push(server);
    server.start();

    // This is a persistent server
    if (isPersistent) {
      // Creating new PersistentServer object
    };

    return server.info;
  };

  // getAvailablePort
  async getAvailablePort(): Promise<number> {
    // Getting all "occupied" ports
    const occupiedPorts = this.servers.map((server) => server.info.port);
    let port = await getPort({
      portRange: [10000, 99999],
    });
    
    while (occupiedPorts.includes(port)) {
      port = await getPort({
        portRange: [10000, 99999],
      });
    };

    return port;
  };

  // 
  isImageAvailable(image: string): boolean {
    const availableImages = ["knockback"];
    return availableImages.includes(image);
  };

  getImageUrl(image: string): string {
    const images = [{
      id: 'knockback',
      url: 'https://github.com/bluk-studio/games.knockback',
    }];

    return images.find((x) => x.id == image).url;
  };
};