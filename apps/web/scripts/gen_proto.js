import os from 'os';
import glob from 'glob';
import { exec } from 'child_process';

// Getting shared proto files
let shared = await (new Promise((resolve) => {
  glob('../shared/src/proto/**/*.proto', (error, res) => {
    if (!error) {
      console.warn('Found these proto files:');
      
      // Transforming
      resolve(res.map((path) => {
        // Getting file name
        const filename = path.replace('../shared/src/proto/', '');

        return {
          path: path.replace('/' + filename, ''),
          file: filename
        };
      }));
    };
  });
}));

shared.forEach(({ path, file }) => {
  console.log(path, file);
});

// Generating and executing proto command
// const command = `npx protoc --plugin=./node_modules/.bin/protoc-gen-ts_proto${ os.type().includes("Windows") ? '.cmd' : '' } --proto_path=./src/proto ${ shared.map((entry) => entry.file).join(' ') } --ts_proto_opt=nestJs=true,addGrpcMetadata=true,addNestjsRestParameter=true --ts_proto_out ./src/interfaces/proto`;

// Generating and executing proto command
const command = `npx protoc --proto_path=../shared/src/proto ${ shared.map((entry) => entry.file).join(' ') } --ts_out ./src/generated`;

// +todo error handling?
exec(command, (error) => {
  if (error) console.error(error);
});