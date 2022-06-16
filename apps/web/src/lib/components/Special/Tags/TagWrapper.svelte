<script lang="ts">
  // Importing modules
  import { BadgeCheck, Fire, Star } from "@steeze-ui/heroicons";
  import { Icon } from "@steeze-ui/svelte-icon";

  // Tags information
  const tags = [
    {
      id: 'popular',
      icon: Star,
      color: '#facc15',
      text: 'Популярное',
    },
    {
      id: 'new',
      icon: Fire,
      color: '#4338ca',
      text: 'Новое',
    },
    {
      id: 'featured',
      icon: BadgeCheck,
      color: '#10b981',
      text: 'Выбрана Администрацией'
    }
  ];
  
  $: foundTag = tags.find((x) => x.id == tag);

  export let tag: string;
</script>

{ #if foundTag != null }
  <div class="flex items-center">
    <Icon src={ foundTag.icon } size="15" style="color: { foundTag.color };" />

    <p class="ml-0.5 text-xs text-gray-100 opacity-70">{ foundTag.text }</p>
  </div>
{ /if }