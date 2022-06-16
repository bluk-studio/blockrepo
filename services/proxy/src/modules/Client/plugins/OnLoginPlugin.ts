import { Client, Server } from 'minecraft-protocol';
import { dimension_codec } from 'src/types/codec';

export function OnLoginPlugin(client: Client, server?: Server) {
  // @ts-ignore
  server?.on('login_client', (client) => {
    console.log("login_client");

    // Writing login packet
    client.write('login', {
      entityId: 0,
      isHardcore: false,
      gameMode: 2,
      previousGameMode: -1,
      worldNames: ['minecraft:overworld'],
      // dimensionCodec: dimension_codec,
      dimension: "minecraft:overworld",
      worldName: 'minecraft:overworld',
      hashedSeed: [0, 0],
      maxPlayers: 32,
      viewDistance: 0,
      reducedDebugInfo: false,
      enableRespawnScreen: false,
      isDebug: false,
      isFlat: false,
    });

    // Writing spawn position and player position
    client.write('spawn_position', { 
      location: {
        x: 0,
        y: 0,
        z: 0,
        yaw: 90,
        pitch: 0,
      }
    });

    client.write('position', {
      // Position
      x: 0,
      y: 0,
      z: 0,
      yaw: 90,
      pitch: 0,

      flags: 0x00,
      teleportId: 0,
    });

    client.write('update_view_position', {
      chunkX: 0,
      chunkZ: 0,
    });

    client.write('held_item_slot', { slot: 0 })
  });
};