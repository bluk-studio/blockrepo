import { Controller } from '@nestjs/common';
import { OneClusterServiceController, OneClusterServiceControllerMethods } from '@proto/ClustersService';
import { Server, ServerHealth } from '@proto/types/cluster/server';
import { CreateServerRequest, GetAllServersResponse, SendServerHealthRequest } from '@proto/types/metadata/ClustersService';
import { ClusterHealth } from '@proto/types/cluster/health';
import { HealthService } from 'src/modules/Health/services';
import { ManyServersService } from 'src/modules/Servers/services';

@Controller()
@OneClusterServiceControllerMethods()
export class GatewayController implements OneClusterServiceController {
  constructor(
    private serversService: ManyServersService,
    private healthService: HealthService,
  ) {}

  async getAllServers(): Promise<GetAllServersResponse> {
    return {
      servers: this.serversService.servers.map((server) => server.info),
    };
  };

  async createServer(data: CreateServerRequest): Promise<Server> {
    return await this.serversService.create(data);
  };

  async getClusterHealth(): Promise<ClusterHealth> {
    return this.healthService.health;
  };

  // 
  async sendServerHealth(data: SendServerHealthRequest): Promise<ServerHealth> {
    const server = this.serversService.servers.find((x) => data.id);
    if (!server) return;

    server.updateHealth(data.health);
    return server.info.health;
  };
};