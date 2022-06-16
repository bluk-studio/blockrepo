import { Injectable } from '@nestjs/common';
import { ClusterHealth } from '@proto/types/cluster/health';

@Injectable()
export class HealthService {
  // Current application health
  public health: ClusterHealth;

  // 
  update(newHealth: Partial<ClusterHealth>) {
    this.health = {
      ...newHealth,
      ...this.health,
    };
  };
};