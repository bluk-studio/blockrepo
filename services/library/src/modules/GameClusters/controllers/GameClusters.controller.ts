import { Controller } from '@nestjs/common';
import { ClustersServiceControllerMethods, ClustersServiceController } from '@proto/ClustersService';
import { GetAllResponse } from '@proto/types/metadata/ClustersService';
import { GameClustersService } from '../services';

@Controller()
@ClustersServiceControllerMethods()
export class GameClustersController implements ClustersServiceController {
  constructor(
    private readonly service: GameClustersService,
  ) {}

  async getAll(): Promise<GetAllResponse> {
    return {
      clusters: this.service.getAll(),
    }
  };
};