<script lang="ts">
  import { Icon } from '@steeze-ui/svelte-icon';
  import { Refresh } from '@steeze-ui/heroicons';

  function getMeme() {
    fetch("https://meme-api.herokuapp.com/gimme")
    .then((response) => response.json())
    .then((data) => {
      meme = data.url as string;
    });
  };

  let meme: string | null;
</script>

<section class="mt-16 w-full relative px-2">
  <div style="padding-top: 40%;" class="w-full relative py-2">
    <div style="background-color: #4158D0; background-image: linear-gradient(43deg, #4158D0 0%, #C850C0 46%, #FFCC70 100%);" class="absolute inset-0 w-full h-full rounded-md p-2 flex justify-center items-center">
      <!-- Image -->
      <div class="w-2/5 h-2/3 px-4 md:px-6 flex flex-col justify-center items-center border-2 border-dashed border-gray-300 rounded-md mx-2 relative">
        { #if meme == null }
          <!-- Title -->
          <h1 class="text-md text-white text-center">Тут должна была быть красивая картинка</h1>

          <!-- Description -->
          <p class="mt-2 text-sm text-white opacity-75 text-center">У нас совсем нету денег и умений на создание красивых картинок... Поэтому их тут не будет. Зато вы можете посмотреть на мемы!</p>

          <!-- Button -->
          <button on:click={getMeme} class="mt-3 bg-input rounded-md px-4 py-2 flex justify-center items-center">
            <!-- Title -->
            <p class="text-white text-sm opacity-75">Загрузить рандомный мем</p>
          </button>
        { :else }
          <img src="{ meme }" class="w-full h-full" alt="meme lol">

          <!-- Randomize button -->
          <div class="absolute top-0 right-0 p-3">
            <button on:click={getMeme} class="p-2 opacity-50 rounded-md bg-input">
              <Icon src={Refresh} size="20" class="text-white" />
            </button>
          </div>
        { /if }
      </div>

      <!-- Texts -->
      <div class="w-3/5 px-4">
        <!-- Text -->
        <div class="mt-2 text-center opacity-75">
          <h1 class="text-white texx-xl font-bold">Поддержать проект</h1>
          <p class="mt-1 text-xs text-gray-100">Поддерживая наш проект вы гарантируете то, что он вообще будет работать. У нас нету никакой рекламы ну или какого-либо бюджета - мы работает на донаты наших пользователей. Так же, поддержав нас, вы дадите нам мотивацию продолжать разрабатывать проект!<br /><br />Вы можете поддержать проект, купив что-то в нашем Донат Магазине, ну или же использовав Patreon, DonationAlerts и подобное.</p>
        </div>

        <!-- Buttons -->
        <div class="w-full flex mt-2">
          <!-- Offer a Game -->
          <button class="mr-2 w-1/2 flex justify-center items-center py-1 bg-input rounded-md">
            <!-- Icon -->
            <svg style="height: 0.8rem; width: 0.8rem;" class="text-white" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path><line x1="3" y1="6" x2="21" y2="6"></line><path d="M16 10a4 4 0 0 1-8 0"></path></svg>

            <!-- Title -->
            <p class="text-sm text-white ml-2">Перейти в магазин</p>
          </button>

          <!-- See all list of Offered Games -->
          <button class="ml-2 w-1/2 flex justify-center items-center py-1 bg-input rounded-md">
            <!-- Icon -->
            <svg style="height: 0.8rem; width: 0.8rem;" class="text-white" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="1"></circle><circle cx="19" cy="12" r="1"></circle><circle cx="5" cy="12" r="1"></circle></svg>

            <!-- Title -->
            <p class="text-sm text-white ml-2">Другие способы</p>
          </button>
        </div>
      </div>
    </div>
  </div>
</section>