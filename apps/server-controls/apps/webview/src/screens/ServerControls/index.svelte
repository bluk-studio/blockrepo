<script lang="ts">
  // Importing modules
  import { Icon } from '@steeze-ui/svelte-icon';
  import { ClipboardCopy } from '@steeze-ui/heroicons'; 

  // Server information object (receivable from server)
  const information = [
    {
      label: "Статус",
      html: "<span class='text-green-500'>Онлайн</span>"
    },
    {
      label: "Игроков",
      html: "100/250"
    },
    {
      label: 'IP',
      html: "test.b.bluk.studio",
      meta: {
        isCopiable: true,
      },
    }
  ]
</script>

<!-- Content itself -->
<div class="bg-editor-background rounded-md px-2 py-4">
  <!-- Server information -->
  { #each information as entry }
    { @const meta = entry.meta ?? {} }

    <div class="px-2 my-1.5 text-sm flex items-center">
      <!-- Label -->
      <p class="text-white text-opacity-60">{ entry.label }:</p>

      <!-- Value -->
      <div class="ml-2 text-white flex items-center">
        <p>{ @html entry.html}</p>

        <!-- IsCopiable -->
        { #if meta?.isCopiable }
          <button class="ml-1">
            <Icon src={ClipboardCopy} class="w-5" />
          </button>
        { /if }
      </div>
    </div>
  { /each }

  <!-- Controls -->
  <div class="mt-4 flex flex-wrap">
    <!-- Stop -->
    <button class="mx-2 my-1 px-4 py-1.5 shadow-md bg-red-500 bg-opacity-80 hover:bg-opacity-100 flex items-center justify-center">
      <p class="text-sm text-white">Выключить</p>
    </button>

    <!-- Restart -->
    <button class="mx-2 my-1 px-4 py-1.5 shadow-md bg-slate-900 bg-opacity-80 hover:bg-opacity-100 flex items-center justify-center">
      <p class="text-sm text-white">Перезапустить</p>
    </button>
  </div>
</div>