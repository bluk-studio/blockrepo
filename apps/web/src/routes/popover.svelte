<script>
  // Importing modules
  import { fade } from "svelte/transition";

  import { createEventDispatcher } from "svelte";
  const dispatch = createEventDispatcher();
  
  let page = "main";
</script>

<!-- Page's Layout -->
<div transition:fade style="z-index: 1000;" class="fixed inset-0 bg-container w-full h-full flex justify-center items-center">
  <!-- Background -->
  <div style="background-image: url('/background/1.svg');" class="background absolute inset-0 w-full h-full"></div>
      
  <!-- Mini-Header -->
  <div class="absolute top-0 w-full flex justify-center py-6">
    <img class="h-6" src="./logotype/small-white.svg" alt="Lococovu Logotype">
  </div>

  <!-- Container -->
  <div class="w-full md:w-2/3 lg:w-1/3 relative h-screen flex flex-col items-center justify-center">
    
    <!-- Main Screen -->
    { #if page == "main" }
      <!-- Texts -->
      <h1 class="text-center text-xl text-white font-medium">Добавить друга</h1>
      <p class="text-center text-sm text-gray-100 opacity-80">Небольшая инструкция, объясняющая как добавить друг друга в друзья, написана ниже.</p>

      <!-- Buttons -->
      <div class="w-full my-4 flex flex-wrap relative">
        <!-- Receive Code -->
        <div class="w-1/2 p-2">
          <div class="pt-100% w-full relative">
            <div on:click={(e) => {
              page = "sender";
            }} style="background-color: #FBDA61; background-image: linear-gradient(45deg, #FBDA61 0%, #FF5ACD 100%);" class="absolute cursor-pointer inset-0 w-full h-full rounded-md flex flex-col justify-center items-center">
              <!-- Icon -->
              <img class="w-1/6" src="./icons/outbox-tray.png" alt="">

              <!-- Texts -->
              <div class="text-center mt-3 px-2">
                <h1 class="text-xl text-white font-medium">Я отправляю</h1>
                <p class="text-xs text-gray-100">Я хочу сделать специальный <span class="border-b border-dotted border-gray-100">пригласительный код</span>, с помощью которого мой друг сможет добавить меня в свой список друзей.</p>
              </div>
            </div>
          </div>
        </div>

        <!-- Use Code -->
        <div class="w-1/2 p-2">
          <div class="pt-100% w-full relative">
            <div on:click={(e) => {
              page = "receiver";
            }} style="background-color: #4158D0; background-image: linear-gradient(43deg, #4158D0 0%, #C850C0 46%, #FFCC70 100%);" class="cursor-pointer absolute inset-0 w-full h-full rounded-md flex flex-col justify-center items-center">
              <!-- Icon -->
              <img class="w-1/6" src="./icons/inbox-tray.png" alt="">

              <!-- Texts -->
              <div class="text-center mt-3 px-2">
                <h1 class="text-xl text-white font-medium">Я принимаю</h1>
                <p class="text-xs text-gray-100">У вас есть <span class="border-b border-dotted border-gray-100">пригласительный код</span>, который вы получили от друга. Нету кода? Попросите друга нажать на кнопку слева.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Instruction -->
      <div class="w-full relative px-2">
        <p class="inline text-left text-sm text-gray-100 leading-4">
          <!-- <Icon name="help-circle" attrs={{ width: "1rem", height: "1rem", color: "#fff", class: "float-left items-center mr-1" }} /> -->

          Ваш друг должен нажать на кнопку 
          <span class="border-b border-dotted border-gray-100">Я отправляю</span>. 
          У него появится специальный пригласительный код, который он потом кидает Вам. Вы же нажимаете на кнопку 
          <span class="border-b border-dotted border-gray-100">Я принимаю</span>, 
          вписываете этот пригласительный код и становитесь друзьями!<br /><br />Это довольно-таки просто, не так ли?</p>
      </div>
      
    <!-- Receiver Screen -->
    { :else }

    { /if }
  </div>

  <!-- Cancel Button -->
  <div class="absolute bottom-0 w-full py-6 flex justify-center items-center">
    <div class="w-1/3 relative">
      <button on:click={(e) => {
        dispatch("close");
      }} class="w-full rounded-md bg-input py-3 text-sm text-white">
        Отмена
      </button>
    </div>
  </div>
</div>