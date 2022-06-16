import * as minecraft_data from 'minecraft-data'

const { loginPacket } = minecraft_data("1.18.2")

export const dimension_codec = loginPacket.dimensionCodec;