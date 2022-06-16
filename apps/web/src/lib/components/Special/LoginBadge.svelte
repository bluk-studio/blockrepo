<script lang="ts">
  // Importing modules
  import { fade } from 'svelte/transition';
  import { goto } from '$app/navigation';
</script>

<div in:fade class="relative w-full px-4">
  <button on:click={() => goto('/login')} class="transition duration-200 ease-in-out relative w-full p-3 rounded-md opacity-80 bg-icon-button bg-opacity-50 hover:bg-opacity-100 mt-4">
    <!-- Texts -->
    <div class="ml-3 text-left">
      <h1 class="text-base text-white ">Хотите присоединиться?</h1>
      
      <p class="text-xs text-gray-100">Нажмите сюда, что бы зарегистрироваться/войти</p>
    </div>
  </button>
</div>