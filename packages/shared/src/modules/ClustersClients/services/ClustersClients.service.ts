import { Injectable, Inject, OnModuleInit } from '@nestjs/common';
import { ClientGrpc } from '@nestjs/microservices';
import { OneClusterServiceClient } from '@shared/interfaces/proto/ClustersService';

@Injectable()
export class ClustersClientsService implements OnModuleInit {
  public zurich: OneClusterServiceClient;

  constructor(
    @Inject('zurich_cluster')
    private zurich_cluster: ClientGrpc,
  ) {};

  onModuleInit() {
    this.zurich = this.zurich_cluster.getService<OneClusterServiceClient>('OneClusterService');
  };
};