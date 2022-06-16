import { fetchStore } from "$lib/helpers";
import { ProfileStore } from "../Profile.store";

export async function getAuthMetadata(tokenId?: string) {
  // Fetching token from user store
  if (!tokenId) {
    const profile: ProfileStore = await fetchStore(ProfileStore.subscribe);

    if (profile?.token == null) return {};
    tokenId = profile?.token?.id;
  };

  return {
    token: tokenId,
  };
};