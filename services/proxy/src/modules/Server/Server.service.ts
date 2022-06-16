import { Injectable, NotFoundException, OnApplicationBootstrap } from "@nestjs/common";
import { Server, createServer } from 'minecraft-protocol';
import { ClientService, OnlinePlayer } from "../Client/Client.service";
import * as Plugins from './plugins';

@Injectable()
export class ServerService implements OnApplicationBootstrap {
  constructor(
    private readonly ClientService: ClientService,
  ) {}

  // Server instance
  public instance: Server;

  public players: Array<OnlinePlayer> = [];

  // Creating new server instance
  onApplicationBootstrap() {
    this.instance = this._createInstance();

    // Enabling server plugins
    Object.values(Plugins).forEach((plugin) => plugin(this));

    // Creating OnlinePlayer for each connection
    this.instance.on('connection', (client) => {
      const clientClass = this.ClientService.createForClient(client, this.instance);
      this.players.push(clientClass);
    });
  };

  private _createInstance(): Server {
    const server = createServer({
      "online-mode": false,
      version: "1.18.2",
      port: 25565,
      errorHandler: (client, error) => {
        console.log('error received', error);
      },
    });

    return server;
  };
};