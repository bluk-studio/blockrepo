<script>
  
	let instances = [
		{
			id: 0,
			title: "Title #1",
			visual: {
				image: "https://www.wplay.net.ua/wp-content/uploads/2017/08/assassin-creed-origins-date-de-sortie-trailer-news_29174_wide.jpg",
				preview: "",
				description: "Lorem"
			}
		},
		{
			id: 1,
			title: "Title #1",
			visual: {
				image: "https://steamcdn-a.akamaihd.net/steam/apps/397540/header.jpg?t=1600378875",
				preview: "",
				description: "Lorem"
			}
		},
		{
			id: 2,
			title: "Title #1",
			visual: {
				image: "https://www.godisageek.com/wp-content/uploads/Forager-review.jpg",
				preview: "",
				description: "Lorem"
			}
		},
		{
			id: 3,
			title: "Title #1",
			visual: {
				image: "https://cdn2.unrealengine.com/egs-thelongdark-hinterlandstudioinc-g1a-00-1920x1080-231d3328f957.jpg?h=1080&resize=1&w=1920",
				preview: "",
				description: "Lorem"
			}
		},
		{
			id: 4,
			title: "Title #1",
			visual: {
				image: "https://gamefarm.ru/wp-content/uploads/2017/04/prey-logo.jpg",
				preview: "",
				description: "Lorem"
			}
		}
	];
</script>

<!-- Featured Games -->
<div class="w-full relative mb-6 px-2">
  <div style="padding-top: 40%;" class="relative">
    <div style="background-image: url('https://cdn2.unrealengine.com/egs-thelongdark-hinterlandstudioinc-g1a-00-1920x1080-231d3328f957.jpg?h=1080&resize=1&w=1920'); background-size: cover; background-repeat: no-repeat;" class="shadow-md absolute inset-0 w-full h-full rounded-md"></div>

    <!-- Helper -->
    <div class="absolute top-0 right-0 p-2">
      <div class="bg-white px-4 py-1 opacity-75 rounded-md flex items-center">
        <!-- Icon -->
        <svg style="height: 0.9rem; width: 0.9rem;" class="text-black" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path><line x1="12" y1="17" x2="12.01" y2="17"></line></svg>

        <!-- Helper Text -->
        <p class="text-sm text-black ml-2">Нажмите на картинку, что бы узнать больше</p>
      </div>
    </div>

    <!-- Dots -->
    <div class="absolute bottom-0 w-full flex justify-center items-center pb-4">
      <div class="mx-2 w-4 h-4 rounded-full bg-white"></div>
      <div class="mx-2 w-3 h-3 rounded-full border-2 border-white opacity-50"></div>
      <div class="mx-2 w-3 h-3 rounded-full border-2 border-white opacity-50"></div>
    </div>
  </div>
</div>

<!-- Ads -->
<div class="w-full relative mb-6 px-2">
  <div class="pt-40% relative w-full">
    <div class="absolute inset-0 w-full h-full rounded-md border border-dashed border-gray-500 p-3">
      <!-- Tags -->
      <div class="w-full flex justify-between items-center">
        <div class="flex items-center">
          <!-- Links -->

          <!-- Pawcapsu -->
          <button class="mx-4 flex items-center">
            <!-- Logotype -->
            <img class="w-5 h-5" src="https://res.cloudinary.com/lococovu-cdn/image/upload/v1610810215/logotypes/pawcapsu-white-small.svg" alt="Pawcapsu Logotype">

            <!-- Text -->
            <p class="text-base text-white ml-2 font-medium">Pawcapsu</p>
          </button>

          <!-- Lococovu Comics -->
          <button class="mx-4 flex items-center opacity-50">
            <!-- Logotype -->
            <img class="w-4 h-4" src="./logotype/small-white.svg" alt="Lococovu Logotype">

            <!-- Text -->
            <p class="text-sm text-white ml-2 font-medium">Comics</p>
          </button>

          <!-- Lococovu Cloud -->
          <button class="mx-4 opacity-50 flex items-center">
            <!-- Logotype -->
            <img class="w-4 h-4" src="./logotype/small-white.svg" alt="Lococovu Logotype">

            <!-- Text -->
            <p class="text-sm text-white ml-2 font-medium">Cloud</p>
          </button>
        </div>
      </div>
    </div>
  </div>
</div>

<!-- Game Library -->
<div class="w-full border-b-2 border-solid border-indigo-400 text-left pb-2">
  <h1 class="text-2xl text-white opacity-75 font-bold">Популярное</h1>
  <p class="text-sm text-white opacity-50 w-1/3">Все самые популярные и играемые мини-игры на сервисе. Обновляется каждый день.</p>
</div>

<div class="w-full mt-2 h-full flex flex-wrap">
  { #each instances as instance }
    <div class="w-1/3 relative px-2 py-2">
      <div style="padding-top: 60%;" class="relative">
        <div style="background-image: url({ instance.visual.image }); background-size: cover; background-position: center;" class="absolute inset-0 w-full h-full rounded-md flex flex-col-reverse">
          <!-- Title -->
          <div class="w-full py-1 px-2 rounded-b-md relative">
            <h1 class="text-sm text-white font-medium">{ instance.title }</h1>
          </div>
        </div>
      </div>
    </div>
  { /each }

  <!-- More Popular Games -->
  <div class="w-1/3 relative px-2 py-2">
    <div style="padding-top: 60%;" class="relative">
      <div style="" class="absolute border-2 border-solid border-indigo-400 inset-0 w-full h-full rounded-md flex flex-col justify-center items-center pr-2">
        <!-- Icon -->

        <!-- Text -->
        <div class="w-2/3 opacity-75 text-center">
          <h1 class="text-md font-bold text-white">Больше игр</h1>
          <p class="text-sm text-gray-100 mt-2">Перейти в полную Библиотеку мини-игр</p>
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

<!-- List all Tags -->
<div class="w-full border-b-2 border-solid border-indigo-400 text-left pb-2 mt-12">
  <h1 class="text-2xl text-white opacity-75 font-bold">Тэги</h1>
  <p class="text-sm text-white opacity-50 w-1/3">Краткий список всех тэгов, которые существенно упростят поиск Вашей новой любимой мини-игры</p>
</div>

<div class="w-full mt-2 h-full flex flex-wrap">
  { #each instances as instance }
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
  { /each }

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

<!-- Support Project -->
<section class="mt-16 w-full relative px-2">
  <div style="padding-top: 40%;" class="w-full relative py-2">
    <div style="background-color: #4158D0; background-image: linear-gradient(43deg, #4158D0 0%, #C850C0 46%, #FFCC70 100%);" class="absolute inset-0 w-full h-full rounded-md p-2 flex justify-center items-center">
      <!-- Image -->
      <div class="w-2/5 h-2/3 opacity-50 mx-4 px-4 md:px-6 flex flex-col justify-center items-center border-2 border-dashed border-gray-300 rounded-md mx-2">
        <!-- Title -->
        <h1 class="text-md text-white text-center">Тут должна была быть красивая картинка</h1>

        <!-- Description -->
        <p class="mt-2 text-sm text-white opacity-75 text-center">У нас совсем нету денег и умений на создание красивых картинок... Поэтому их тут не будет. Зато вы можете посмотреть на мемы!</p>

        <!-- Button -->
        <button class="mt-3 bg-input rounded-md px-4 py-2 flex justify-center items-center">
          
          <!-- Title -->
          <p class="text-white text-sm opacity-75">Загрузить рандомный мем</p>
        </button>

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