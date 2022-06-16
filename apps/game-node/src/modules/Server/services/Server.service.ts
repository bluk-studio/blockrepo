import { Injectable, Logger, OnApplicationBootstrap } from '@nestjs/common';
import { ChildProcessWithoutNullStreams, spawn } from 'child_process';
import git from 'isomorphic-git';
import http from 'isomorphic-git/http/node';
import * as path from 'path';
import * as fs from 'fs';

@Injectable()
export class ServerService implements OnApplicationBootstrap {
  // Spawned server instance
  private instance: ChildProcessWithoutNullStreams;
  private logger = new Logger(ServerService.name);

  async onApplicationBootstrap() {
    // Downloading server instance
    await this.downloadImage();

    // Starting server instance
    this.start();
  };

  async downloadImage() {
    this.logger.warn(`Downloading server image (${ process.env.SERVER_IMAGE_URL })`);

    // Getting image url
    const url = process.env.SERVER_IMAGE_URL;
    if (!url) throw new Error("Server image url isn't specified.");

    let currentPhase;

    await git.clone({ 
      fs, 
      http, 
      
      dir: path.join(process.cwd(), 'server'), 
      url, 
      
      onProgress: (progress) => {
        if (currentPhase != progress.phase) {
          currentPhase = progress.phase;
          this.logger.warn(`[Cloning] ${progress.phase} (total: ${progress.total})`);
        };
      },

      depth: 1,
      // noTags: true,
      // noCheckout: true,
      // singleBranch: true, 
    });
  };

  start() {
    this.logger.warn('Trying to start minecraft server...');
    if (this.instance) throw new Error('Server already started');

    // Spawning new minecraft instance
    this.instance = spawn('java', ['-Xmx2G', '-jar', 'server.jar', 'nogui'], {
      cwd: './server',
    });

    // Piping
    this.instance.stdout.pipe(process.stdout);
    process.stdin.pipe(this.instance.stdin);

    // Handling logs
    this.instance.stdout.on('data', (data) => {
      // +todo
      // - check if server is started
      // - get players count
    });
  };
};