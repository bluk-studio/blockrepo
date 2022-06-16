import { Injectable, Logger, OnApplicationBootstrap } from '@nestjs/common';
import { Socket } from 'net';
import { readFileSync } from 'fs';
import { Client } from 'ssh2';

@Injectable()
export class TunnelService implements OnApplicationBootstrap {
  private clients: Array<Client> = [];
  private logger = new Logger(TunnelService.name);
  private proxyConfig = {
    host: 'proxy.bluk.studio',
    port: 22,
    username: 'ubuntu',
    privateKey: readFileSync('proxy.key'),
  };

  // Creating ssh tunnel
  onApplicationBootstrap() {
    // Configuration
    const config = {
      server_port: Number(process.env.SERVER_PORT),
    };

    if (!config.server_port) return;

    // Starting Server Tunnel
    this.createServerTunnel(config.server_port);
  };

  // Server Tunnel
  createServerTunnel(port: number) {
    const client = new Client();
    this.clients.push(client);

    // Connecting to proxy jump server
    client.on('ready', () => {
      client.forwardIn('proxy.bluk.studio', port, (error) => {
        if (error) throw error;

        this.logger.warn('Tunnel started');
      });
    }).on('tcp connection', (info, accept) => {
      // Connecting to locally hosted minecraft
      // server and piping it
      const localSocket = new Socket();
      localSocket.connect(25565, () => {
        const remoteSocket = accept();
        localSocket.pipe(remoteSocket).pipe(localSocket);
      });
    }).connect(this.proxyConfig);
  };

  // API Tunnel
};