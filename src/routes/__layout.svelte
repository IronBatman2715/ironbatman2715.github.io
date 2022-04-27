<script lang="ts">
  import { page } from "$app/stores";

  import "@/styles/color.css";
  import "@/styles/main.css";

  import Header from "@/components/Header/Header.svelte";
  import Footer from "@/components/Footer.svelte";

  import type { PageData } from "@/utils/pageData";
  import pages from "@/utils/pageData";

  let currentPage: PageData;

  $: currentSubURL = $page.routeId || "";
  $: {
    const filteredPages = pages.filter((page) => page.subURL === currentSubURL);

    if (filteredPages.length === 1) {
      currentPage = filteredPages[0];
    } else {
      console.error("Cannot fetch page data!");
    }
  }
</script>

<svelte:head>
  <title>{`Z-Site${currentPage.subURL !== "" ? `: ${currentPage.name}` : ``}`}</title>
</svelte:head>

<Header {currentPage} />

{#if currentSubURL === ""}
  <slot />
{:else}
  <main id="content">
    <slot />
  </main>
{/if}

<Footer />
