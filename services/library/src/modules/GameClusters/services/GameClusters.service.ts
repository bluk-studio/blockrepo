import { Injectable } from '@nestjs/common';
import { GameCluster } from '@proto/types/gameCluster';

@Injectable()
export class GameClustersService {
  // Clusters information
  private readonly clusters: Array<GameCluster> = [];
  
  // Methods
  getAll(): Array<GameCluster> {
    return this.clusters;
  };
};