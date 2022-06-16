<script lang="ts">
  // Importing modules
  import { ProfileStore } from '$lib/services/Profile/Profile.store';
  import { Cog, Logout } from '@steeze-ui/heroicons';
  import { Icon } from '@steeze-ui/svelte-icon';
  import { fade,slide } from 'svelte/transition';

  let isBottomMenuOpened = false;
</script>

<div in:fade class="relative w-full px-4">
  <button on:click={() => isBottomMenuOpened = !isBottomMenuOpened} class="relative w-full p-3 { isBottomMenuOpened ? 'rounded-t-md' : 'rounded-md' } flex items-center opacity-80 bg-icon-button bg-opacity-50 hover:bg-opacity-100 mt-4">
    <!-- Icon -->
    <div style="background-image: url('https://images.unsplash.com/photo-1601979031925-424e53b6caaa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cHVwcHl8ZW58MHx8MHx8&w=1000&q=80'); background-size: cover; background-position: center;" class="relative w-12 h-12 rounded-md bg-input">
    </div>

    <!-- Texts -->
    <div class="ml-3 text-left">
      <h1 class="text-base text-white ">{ $ProfileStore.user?.username }</h1>
      
      <p class="text-sm text-gray-100 border-b border-dotted border-gray-100">{ $ProfileStore.user?.email }</p>
    </div>
  </button>

  <!-- Bottom Menu -->
  { #if isBottomMenuOpened }
    <div transition:slide|local class="relative w-full bg-icon-button bg-opacity-30 rounded-b-md flex flex-col justify-center items-stretch p-3">
      <!-- Settings button -->
      <button class="transition duration-200 ease-in-out cursor-not-allowed w-full bg-icon-button hover:opacity-80 flex items-center py-2 px-4 rounded-md mb-2">
        <Icon size="20" class="text-white" src={Cog} />

        <p class="text-sm text-white ml-1.5">Настройки</p>
      </button>

      <!-- Logout button -->
      <button on:click={() => {
        ProfileStore.logout();
      }} class="transition duration-200 ease-in-out w-full bg-red-500 hover:opacity-80 flex items-center py-2 px-4 rounded-md">
        <Icon size="20" class="text-white" src={Logout} />

        <p class="text-sm text-white ml-1.5">Выйти</p>
      </button>
    </div>
  { /if }
</div>