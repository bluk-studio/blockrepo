<script lang="ts">
  // Importing service
  import { GamesListServiceClient } from '../generated/library.client';
  import { GrpcWebFetchTransport } from '@protobuf-ts/grpcweb-transport';

  import { onMount } from 'svelte';

  const client = new GamesListServiceClient(new GrpcWebFetchTransport({ baseUrl: 'http://localhost:8080' }));

  onMount(async () => {
    const { response } = await client.findOne({ id: 1 });
    console.log(response);
  });
</script>


<!-- News && Player Stats -->
<div class="w-full mb-6 flex items-center">
  <!-- Player's Stats section -->
  <section class="w-1/2 py-6 px-4">
    <!-- Player's Rank -->
    <div class="w-full flex items-center px-2">
      <!-- Rank Icon -->
      <div class="w-24 h-24 rounded-md bg-input">

      </div>

      <!-- Texts -->
      <div class="w-full px-6">
        <p class="text-xs text-yellow-300">Бронзовый ранг</p>
        <h2 class="mb-4 text-xl text-white font-medium">Маршик</h2>

        <!-- Level -->
        <div class="w-full h-2 rounded-md relative bg-input">
          <div class="w-1/2 h-2 rounded-md bg-blue-400"></div>
        </div>

        <div class="mt-2 w-full flex justify-between">
          <p class="text-xs text-gray-200">1 Уровень</p>

          <p class="text-xs text-gray-200">Очков до второго уровня: <span class="opacity-70">120</span></p>
        </div>
      </div>
    </div>

    <!-- Inventory -->
    <div class="mt-8 w-full pr-6">
      <!-- Texts -->
      <div class="w-full flex items-center">
        <!-- Icon -->
        <!-- <Icon name="package" attrs={{ width: "1.2rem", height: "1.2rem", color: "#fff" }} /> -->

        <!-- Text -->
        <div class="ml-2">
          <h2 class="text-base font-medium text-white">Инвентарь</h2>
          <p class="text-xs text-gray-100 opacity-70">Отображаем только валюты</p>
        </div>
      </div>

      <!-- Money -->
      <div class="mt-4 w-full flex justify-between">
        <!-- Lambdas Card -->

        <div class="w-1/3 relative px-2">
          <div class="w-full pt-50% relative">
            <div class="absolute inset-0 w-full h-full rounded-md bg-input flex items-center p-4">
              <!-- Icon -->
              <!-- <Icon name="hash" attrs={{ width: "1.5rem;", height: "1.5rem", color: "#fff" }} /> -->

              <!-- Texts -->
              <div class="ml-2">
                <p class="text-xs text-gray-100 opacity-70">Лямбды</p>
                <h2 class="text-md text-white font-bold">100 λ</h2>
              </div>
            </div>
          </div>
        </div>
      
        <!-- Hour-Credits -->
        <div class="w-1/3 relative px-2">
          <div class="w-full pt-50% relative">
            <div class="absolute inset-0 w-full h-full rounded-md bg-input flex items-center p-4">
              <!-- Icon -->
              <!-- <Icon name="hash" attrs={{ width: "1.5rem;", height: "1.5rem", color: "#fff" }} /> -->

              <!-- Texts -->
              <div class="ml-2">
                <p class="text-xs text-gray-100 opacity-70">Кредиты</p>
                <h2 class="text-md text-white font-bold">10 ч.</h2>
              </div>
            </div>
          </div>
        </div>

        <!-- Free Hours -->
        <div class="w-1/3 relative px-2">
          <div class="w-full pt-50% relative">
            <div class="absolute inset-0 w-full h-full rounded-md bg-input flex items-center p-4">
              <!-- Icon -->
              <!-- <Icon name="hash" attrs={{ width: "1.5rem;", height: "1.5rem", color: "#fff" }} /> -->

              <!-- Texts -->
              <div class="ml-2">
                <p class="text-xs text-gray-100 opacity-70">Бесп. часы</p>
                <h2 class="text-md text-white font-bold">750 ч.</h2>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  </section>

  <!-- News -->
  <section class="w-1/2 py-6 relative px-4">
    <!-- Card -->
    <div class="w-full relative">
      <div class="pt-60%">
        <div class="absolute inset-0 w-full bg-input rounded-md">

        </div>
      </div>
    </div>

  </section>
</div>


<!-- Tags -->
<!-- List all Tags -->
<div class="w-full border-b-2 border-solid border-indigo-400 text-left pb-2 mt-12">
  <h1 class="text-2xl text-white opacity-75 font-bold">Тэги</h1>
  <p class="text-sm text-white opacity-50 w-1/3">Краткий список всех тэгов, которые существенно упростят поиск Вашей новой любимой мини-игры</p>
</div>

<div class="w-full mt-2 h-full flex flex-wrap">
  <!-- { #each instances as instance } -->
    <div class="w-1/3 relative px-2 py-2">
      <div style="padding-top: 60%;" class="relative">
        <div class="absolute bg-icon-button inset-0 w-full h-full rounded-md flex flex-col justify-center items-center">

          <!-- Icon -->
          <img class="w-1/6" src="./icons/hugging-face.png" alt="Tag Icon">

          <!-- Text -->
          <div class="w-2/3 text-center mt-2 opacity-75">
            <h1 class="text-md text-white font-bold">Популярное</h1>
            <p class="text-sm text-gray-100">Всё то, во что сейчас играют игроки Лококову!</p>
          </div>

        </div>
      </div>
    </div>
  <!-- { /each } -->

  <!-- More Popular Games -->
  <div class="w-1/3 relative px-2 py-2">
    <div style="padding-top: 60%;" class="relative">
      <div style="" class="absolute border-2 border-solid border-indigo-400 inset-0 w-full h-full rounded-md flex flex-col justify-center items-center pr-2">
        <!-- Icon -->

        <!-- Text -->
        <div class="w-2/3 opacity-75 text-center">
          <h1 class="text-md font-bold text-white">Все теги</h1>
          <p class="text-sm text-gray-100 mt-2">Посмотреть полный список тегов, которые упростят поиск интересной Вам игры</p>
        </div>

        <!-- Button -->
        <div class="absolute right-0 h-full bg-indigo-400 px-2 text-white flex items-center">
          <!-- Chevron -->
          <svg style="height: 1rem; width: 1rem;" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-chevron-right"><polyline points="9 18 15 12 9 6"></polyline></svg>
        </div>
      </div>
    </div>
  </div>
</div>
