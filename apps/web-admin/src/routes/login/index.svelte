<script lang="ts">
  import { onMount } from 'svelte';
  import { page } from '$app/stores';
  import { ProfileStore } from '$lib/services/Profile/Profile.store';
  import { goto } from '$app/navigation';
  
  onMount(async () => {
    // Checking if we came from cloud.odzi.dog/auth
    const token = $page.url.searchParams.get('token')
    if (token != null) {
      // Authorizing
      await ProfileStore.fetchMe(`odzi-dog/${token}`);

      goto('/');
    } else {
      window.location.replace('https://cloud.odzi.dog/auth/v1/6246fcb9f35e1dcf37728b62');
    };
  });
</script>