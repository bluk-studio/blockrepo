<div class="w-full mt-2 flex flex-wrap">
  { #each [{ type: 'warning' }, { type: 'friend' }] as notification }
    <div class="w-1/4 relative px-2 py-2">
      <div style="padding-top: 100%;" class="relative">
        <div class="absolute inset-0 w-full h-full rounded-md bg-icon-button flex flex-col opacity-80">
    
          <!-- Mini-Header -->
          <div class="w-full flex items-center justify-between p-4">
            <!-- Type -->
            <h1 class="text-md text-white">{ notification.type == "warning" ? "Предупреждение" : notification.type == "friend" ? "Друзья" : "Другое" }</h1>
    
            <!-- Settings -->
            <button class="w-8 h-8 rounded-md bg-input flex justify-center items-center">
              <svg style="width: 1rem; height: 1rem;" class="text-white" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>
            </button>
          </div>
    
          <!-- Content -->
          <div class="absolute inset-0 w-full h-full flex flex-col justify-center items-center">
            
            <div class="flex items-center">
              <!-- Icon -->
              <img style="height: 1.2rem; width: 1.2rem;" src="./icons/wrapped-present.png" alt="">
              
              <h1 class="text-2xl text-white font-medium ml-1">Новый подарок</h1>
            </div>
    
            <!-- Description -->
            <p class="px-4 text-xs text-gray-100">Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi voluptate consectetur iure laboriosam delectus at.</p>
          </div>
    
          <!-- Author (if exists) -->
          <div class="absolute bottom-0 w-full flex items-center p-4 opacity-75">
            <p class="text-sm text-gray-100">от</p>
    
            <!-- Author Avatar -->
            <img class="w-5 h-5 rounded-md mx-1" src="https://pm1.narvii.com/7147/35c5df9b0cb86b396fa22d095cfdf1a9e4023705r1-1022-1022v2_00.jpg" alt="Avatar Icon">
    
            <!-- Name -->
            <p class="text-sm text-gray-100 border-b border-dotted border-gray-100">voyaje</p>
          </div>
    
        </div>
      </div>
    </div>
  { /each }
</div>