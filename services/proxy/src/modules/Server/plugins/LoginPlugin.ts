import { Client } from "minecraft-protocol";
import { ServerService } from "../Server.service";

export function LoginPlugin(server: ServerService) {
  server.instance.on('login', (client) => {
    // Sending login information
    sendLogin(client);
    sendPosition(client);
  });
};

// login packet
function sendLogin(client: Client) {
  // Writing
  client.write('login', {
    entityId: client.uuid,
    levelType: 'default',
    gameMode: 2,
    previousGameMode: 2,
    worldNames: ["world"],
    worldName: "world",
    dimension: 0,
    hashedSeed: 100,
    viewDistance: 2,
    reducedDebugInfo: true,
    maxPlayers: 100,
    enableRespawnScreen: true,
    isDebug: false,
    isFlat: false
  });
};

function sendPosition(client: Client) {
  // Sending spawnpoint

  // Sending self position
  client.write('position', {
    x: 0,
    y: 0,
    z: 0,
    yaw: 0,
    pitch: 0,
    flags: 0x00,
    teleportId: 1
  })
};