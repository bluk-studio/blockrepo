<script lang="ts">
  // Importing modules
  import { Icon } from '@steeze-ui/svelte-icon';
  import { Server, Check, Search, ExternalLink, Users, Trash, Clock, Terminal } from '@steeze-ui/heroicons';

</script>

<!-- Header -->
<section class="w-full pt-4 pb-6 border-b-2 border-solid border-gray-300">
  <!-- Title -->
  <p class="text-gray-700 text-sm mx-2">Фильтры</p>
  
  <div class="flex items-center justify-start mt-2">
    <!-- Filters -->
    <button class="rounded-md bg-indigo-500 text-white  px-3 py-2 mx-2 flex items-center">
      <Icon src={Check} class="w-4 h-4" />

      <p class="ml-1.5 text-sm">Knockback</p>
    </button>

    <button class="rounded-md bg-gray-300 text-gray-800 px-3 py-2 mx-2">
      <p class="text-sm">CubeEmpire</p>
    </button>

    <!-- Search bar -->
    <div class="rounded-md bg-gray-800 text-white px-3 py-2 mx-2 flex items-center">
      <Icon src={Search} class="w-4 h-4" />

      <p class="ml-1.5 text-sm">Поиск</p>
    </div>
  </div>
</section>

<!-- Servers themselves -->
<section class="mt-4 flex flex-wrap">
  <!-- Server info -->
  <div class="w-1/2 p-2 relative">
    <div class="w-full h-full rounded-xl bg-white shadow-sm border-2 border-gray-200 px-4 py-3 flex items-start">
      <!-- Game icon -->
      <div class="w-10 h-10 rounded-md bg-red-500">
      </div>

      <!-- Content -->
      <div class="ml-2">
        <div class="flex items-center text-gray-700">
          <Icon src={ExternalLink} class="w-5 h-5" />

          <h1 class="ml-1.5 text-md">knockback-10.<span class="font-medium">zurich.bluk.studio</span></h1>
        </div>

        <!-- Tags -->
        <div class="flex items-center mt-1.5">
          <div class="rounded-md bg-gray-100 text-gray-700 text-xs px-2 py-1">
            <span>Knockback</span>
          </div>
        </div>

        <!-- Server info -->
        <div class="flex items-center my-4">
          <!-- Player count -->
          <div class="flex items-center text-gray-700">
            <Icon src={Users} class="w-4 h-4" />

            <p class="ml-1.5 text-sm">10 игроков</p>
          </div>

          <!-- Dot -->
          <div class="w-1.5 h-1.5 mx-3 rounded-full bg-gray-400 opacity-50"></div>

          <!-- Memory usage -->
          <div class="flex items-center mx-2 text-gray-700">
            <Icon src={Server} class="w-4 h-4" />

            <p class="ml-1.5 text-sm">1.5 GB памяти</p>
          </div>

          <!-- Dot -->
          <div class="w-1.5 h-1.5 mx-3 rounded-full bg-gray-400 opacity-50"></div>

          <!-- Online time -->
          <div class="flex items-center mx-2 text-gray-700">
            <Icon src={Clock} class="w-4 h-4" />

            <p class="ml-1.5 text-sm">1.5 часов онлайн</p>
          </div>
        </div>

        <!-- Server controls -->
        <div class="flex">
          <!-- Destroy -->
          <button class="px-2 py-1 rounded-md bg-red-500 flex items-center justify-center text-white">
            <Icon src={Trash} class="w-5 h-5" />

            <p class="ml-1.5 text-sm">Уничтожить</p>
          </button>

          <!-- RCON -->
          <button class="ml-4 px-2 py-1 rounded-md bg-gray-800 flex items-center justify-center text-white">
            <Icon src={Terminal} class="w-5 h-5" />

            <p class="ml-1.5 text-sm">Консоль</p>
          </button>
        </div>
      </div>
    </div>
  </div>




  <!-- Second server info -->
  <div class="w-1/2 p-2 relative">
    <div class="w-full h-full rounded-xl bg-white shadow-sm border-2 border-gray-200 px-4 py-3 flex items-start">
      <!-- Game icon -->
      <div class="w-10 h-10 rounded-md bg-red-500">
      </div>

      <!-- Name and tags -->
      <div class="ml-2">
        <div class="flex items-center text-gray-700">
          <Icon src={ExternalLink} class="w-5 h-5" />

          <h1 class="ml-1.5 text-md">knockback-10.<span class="font-medium">zurich.bluk.studio</span></h1>
        </div>

        <!-- Tags -->
        <div class="flex items-center mt-1.5">
          <div class="rounded-md bg-gray-100 text-gray-700 text-xs px-2 py-1">
            <span>Knockback</span>
          </div>
        </div>
      </div>

      <!-- Server info -->
      <div>
      </div>
    </div>
  </div>
</section>