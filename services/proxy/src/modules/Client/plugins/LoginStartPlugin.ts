import { Client, Server } from 'minecraft-protocol';
import * as crypto from 'crypto';
import { fromString } from 'uuidv4';

export function LoginStartPlugin(client: Client, server?: Server) {
  client.listeners('login_start').forEach((listener) => {
    // @ts-ignore
    client.removeListener('login_start', listener);
  });

  client.once('login_start', (packet) => {
    console.log('username:', packet);
    console.log('uuid:', nameToMcOfflineUUID(packet.username));

    // console.log('compression');
    // client.write('compress', { threshold: 256 });
    // client.compressionThreshold = "256";

    console.log('success');
    client.write('success', { uuid: nameToMcOfflineUUID(packet.username), username: packet.username })
  
    console.log('emit server');
    server.emit('login_client', client);
  });
};

function javaUUID (s) {
  const hash = crypto.createHash('md5')
  hash.update(s, 'utf8')
  const buffer = hash.digest()
  buffer[6] = (buffer[6] & 0x0f) | 0x30
  buffer[8] = (buffer[8] & 0x3f) | 0x80
  return buffer
}

function nameToMcOfflineUUID (name) {
  return fromString(javaUUID('OfflinePlayer:' + name).toString());
}