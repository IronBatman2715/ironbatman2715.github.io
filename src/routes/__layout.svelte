<script lang="ts">
  import { page } from "$app/stores";

  import "@/styles/color.css";
  import "@/styles/main.css";

  import Header from "@/components/Header/Header.svelte";
  import Footer from "@/components/Footer.svelte";

  import pages from "@/utils/pageData";

  let currentPage: PageData;

  $: {
    const currentSubURL = $page.routeId || "";
    const filteredPages = pages.filter((page) => page.subURL === currentSubURL);

    if (filteredPages.length === 1) {
      currentPage = filteredPages[0];
    } else {
      throw new ReferenceError(`Cannot fetch page data! Add entry for "/${currentSubURL}" in src/utils/pageData.ts`);
    }
  }
</script>

<svelte:head>
  <title>{`Z-Site${currentPage.subURL !== "" ? `: ${currentPage.name}` : ``}`}</title>
  <meta name="description" content={currentPage.description} />
</svelte:head>

<Header {currentPage} />

{#if currentPage.subURL !== ""}
  <main id="content">
    <slot />
  </main>
{:else}
  <slot />
{/if}

<Footer />
