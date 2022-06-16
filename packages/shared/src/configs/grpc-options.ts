import * as glob from 'glob';
import { join, relative } from 'path';
import { Transport } from '@nestjs/microservices';
import { readFileSync, writeFileSync, lstatSync } from 'fs';
import { REFLECTION_PACKAGE } from '@shared/modules/GrpcReflection/constants';

export async function GenerateConfig() {
  console.log('Generating GRPC config file...');

  // Getting all proto files from shared/proto directory
  const shared: Array<string> = await (new Promise((resolve) => {
    glob(join(__dirname, 'types/**/*'), (error, res) => {
      if (!error) {
        // Transforming
        resolve(res.map((path) => {
          // Getting file name
          const relativePath = relative(__dirname, path);

          console.log('path:', path, 'is file:', lstatSync(path).isFile());
          if (lstatSync(path).isFile()) {
            return relativePath;
          };
        }));
      };
    });
  }));
  
  // Returning options
  const options = {
    transport: Transport.GRPC,
    options: {
      package: ['bluk_games', 'grpc.reflection.v1alpha'],
      protoPath: [
        // join(__dirname, 'library.proto'),
        // join(__dirname, 'permissions.proto'),
        join('dist', 'users.proto'),
        // join(__dirname, 'ClustersService.proto'), 

        ...shared.filter((file) => file).map((file) => join('dist', file)),
      ],
    },
  };

  // Putting them into a file
  console.log('Generated file. Writing it into', __dirname);
  writeFileSync('./grpc-generated-options.json', JSON.stringify(options));
  console.log('Wrote file!');
};

export const GrpcOptions = (url?: string) => {
  try {
    // Reading file
    const file = readFileSync('./grpc-generated-options.json');
    
    const options = JSON.parse(file.toString());

    return {
      ...options,
      url,
    };
  } catch {};
};