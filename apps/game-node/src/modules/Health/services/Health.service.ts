import { Injectable } from '@nestjs/common';
import { OneClusterServiceClient } from '@shared/interfaces/proto/ClustersService';
import { ServerHealth } from '@shared/interfaces/proto/types/cluster/server';
import { ClustersClientsService } from '@shared/modules/ClustersClients/services';

@Injectable()
export class HealthSender {
  private cluster: OneClusterServiceClient;
  
  constructor(
    private clusters: ClustersClientsService,
  ) {
    this.cluster = clusters[process.env.CLUSTER_NAME];
  };

  // 
  sendHealthReport(health: ServerHealth) {
    this.cluster.sendServerHealth({
      id: process.env.SERVER_ID,
      health,
    }, null);
  };
};