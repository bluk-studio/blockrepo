import glob from 'glob';
import { exec } from 'child_process';

// Getting shared proto files
const shared = await (new Promise((resolve) => {
  glob('../shared/src/proto/**/*.proto', (error, res) => {
    if (!error) {
      console.warn('Found these proto files:');
      
      // Transforming
      resolve(res.map((path) => {
        // Getting file name
        const filename = path.replace('../shared/src/proto/', '');
        console.log(path, filename);

        return {
          path: path.replace('/' + filename, ''),
          file: filename
        };
      }));
    };
  });
}));

// Services
// {path}: {file}
const services = [
  {
    path: '../shared/src/proto',
    file: 'library.proto',
  },
];

// Generating and executing proto command
const command = `npx protoc --proto_path=../shared/src/proto ${ shared.map((entry) => entry.file).join(' ') } ${ services.map((service) => `--proto_path=${ service.path } ${ service.file }`).join(' ') } --ts_out ./src/generated`;

// +todo error handling?
exec(command, (error) => {
  if (error) console.error(error);
});