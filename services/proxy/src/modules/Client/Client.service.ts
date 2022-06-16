import { Injectable } from '@nestjs/common';
import { Client, Server } from 'minecraft-protocol';

import * as Plugins from './plugins';

// Client class
export class OnlinePlayer {
  constructor(
    private client: Client,
    private server: Server,
  ) {
    // Loading all player plugins
    Object.values(Plugins).forEach((plugin) => plugin(client, server));

    client.on('packet', (data, meta) => {
      console.log('new client packet:', meta.name, data);
    });
  };
};

// Service
@Injectable()
export class ClientService {
  createForClient(client: Client, server: Server): OnlinePlayer {
    return new OnlinePlayer(client, server);
  };
};