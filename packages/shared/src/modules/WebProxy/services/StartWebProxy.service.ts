import { Injectable, OnApplicationBootstrap, Logger } from '@nestjs/common';
import { getServiceOptions } from '@shared/configs';
import { spawn, ChildProcessWithoutNullStreams } from 'child_process';
import { join } from 'path';

@Injectable()
export class StartWebProxyService implements OnApplicationBootstrap {
  private readonly logger = new Logger(StartWebProxyService.name);
  private instance: ChildProcessWithoutNullStreams;

  async onApplicationBootstrap() {
    if (process.env.ENVIRONMENT == 'production') return;
    
    // Getting information from configs
    const serviceOptions = getServiceOptions(process.env.SERVICE);
    if (!serviceOptions) throw new Error('Could not get service options');

    // Getting machine information
    let executable: string;
    
    switch (process.platform) {
      case 'linux':
        executable = './linux';
        break;
    
      case 'win32':
        executable = 'win32.exe';
        break;
    };

    if (!executable) throw new Error('Could not find executable for current operating system');

    // Executing
    this.instance = spawn(join('dist', executable), ['--allow_all_origins', '--run_tls_server=false', `--backend_addr=localhost:${ serviceOptions.port }`, `--server_http_debug_port=${ serviceOptions.proxyPort }`]);
  
    this.instance.stderr.on('data', (data) => {
      this.logger.error(data);
    });
  };
};