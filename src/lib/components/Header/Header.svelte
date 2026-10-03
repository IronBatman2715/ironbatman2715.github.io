<script lang="ts">
  import type { PageMetadata } from "#lib/utils/routing.js";
  import Navbar from "./Navbar.svelte";
  import PageTitleBanner from "./PageTitleBanner.svelte";

  let { pageMetadata }: { pageMetadata: PageMetadata } = $props();
</script>

<header class={pageMetadata.name}>
  <Navbar {pageMetadata} />
  <PageTitleBanner {pageMetadata} />
</header>

<style>
  header.Home {
    flex: 1 1 auto;
  }

  header {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: center;
  }
</style>
