<script lang="ts">
  import type { PageData } from "$utils/pageData";
  import Navbar from "$components/Navbar.svelte";
  import PageTitleBanner from "$components/PageTitleBanner.svelte";

  export let currentPage: PageData;
</script>

<header class={currentPage.name}>
  <Navbar {currentPage} />
  <PageTitleBanner {currentPage} />
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
