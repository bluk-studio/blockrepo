import { Client, Server, states } from 'minecraft-protocol';

export function PingPlugin(client: Client, server?: Server) {
  client.listeners('ping_start').forEach((listener) => {
    // @ts-ignore
    client.removeListener('ping_start', listener);
  });

  client.once('ping_start', onPing)

  function onPing () {
    const response = {
      version: {
        name: 'Hello there!',
        protocol: 47
      },
      players: {
        max: server.maxPlayers,
        online: server.playerCount,
        sample: []
      },
      description: "hello there!",
      favicon: server.favicon
    }

    client.write('server_info', { response: JSON.stringify(response) })

    client.once('ping', function (packet) {
      console.log('ping packet', packet);
      client.write('ping', { time: packet.time })
      client.end()
    })
  }
};