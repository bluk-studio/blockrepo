import type { Token } from 'src/generated/types/token';
import type { User } from 'src/generated/types/user';
import { writable } from 'svelte/store';
import { UsersClient } from '../Clients';
import { getAuthMetadata } from './helpers';

// Store interface
export interface ProfileStore {
  user?: User,
  token?: Token,
};

// Initialize function
function _initialize() {
  const defaultStore: ProfileStore = {};
  const { update, subscribe } = writable(defaultStore);

  return {
    logout() {
      localStorage.removeItem('token');
      
      update(() => {
        return {}
      });
    },

    async fetchMe(tokenId?: string): Promise<{ user?: User, token?: Token }> {
      // Fetching token from local storage
      if (!tokenId) {
        tokenId = localStorage.getItem('token');
      };

      try {
        const { response } = await UsersClient.fetchMe({}, {
          meta: await getAuthMetadata(tokenId),
        });

        // Checking localstorage's token id
        if (response?.token?.id && localStorage.getItem('token') != response?.token?.id) {
          localStorage.setItem('token', response?.token?.id);
        };

        // Updating store
        update(() => response);

        // Returning response
        return response;
      } catch(error) {
        update(() => null);
        
        return null;
      };
    },

    subscribe,
  };
};

export const ProfileStore = _initialize();