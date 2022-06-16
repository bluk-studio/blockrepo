const { InstantConnectProxy } = require('prismarine-proxy')

const login = ['my@email.com', 'mypassword']

const proxy = new InstantConnectProxy({
  loginHandler: () => {
    return { username: 'test' };
  },
  serverOptions: { // options for the local server shown to the vanilla client
    version: '1.18.2',
    "online-mode": false,
    port: 25566
  },
  clientOptions: { // options for the client that will connect to the proxied server
    version: '1.18.2',
    host: 'localhost' // server the proxy will connect to
  }
})

proxy.on('incoming', (data, meta, toClient, toServer) => { // packets incoming from the server to the client
  console.log('incoming packet: ' + meta.name, data);
  toClient.write(meta.name, data) // otherwise send the packet to the client
})

proxy.on('outgoing', (data, meta, toClient, toServer) => { // packets outgoing from the client to the server
  if (!['position', 'position_look', 'teleport_confirm'].includes(meta.name)) console.log('outgoing packet: ' + meta.name, data);
  toServer.write(meta.name, data) // otherwise send the packet to the client
})