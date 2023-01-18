<script lang="ts">
  import { page } from '$app/stores';

  let user: 'ipecac' | null;
  $: user = $page.data.user;
</script>

<div
  style="display: flex; justify-content:space-between; align-items: center; padding: 1em; margin-bottom: 1em; border-bottom: 1px solid palevioletred"
>
  <div style="display: flex; row-gap: .5em">
    <a href="/" style="display: inline-block; margin-right: .5em;">Home</a>

    <a href="/nested" style="display: inline-block; margin-right: .5em;">Nested Route</a>
  </div>

  <div style="display: flex;">
    {#if user}
      <div style="display: inline-block; margin-right: .5em;">
        Welcome, {user}
      </div>

      <a href="/sign-out">Sign Out</a>
    {:else}
      <a href="/sign-in">Sign In</a>
    {/if}
  </div>
</div>

<div style="padding: 1em 4em;">
  <slot />
</div>
