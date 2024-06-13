<script lang="ts">
  import { page } from "$app/stores";

  import "$lib/styles/color.css";
  import "$lib/styles/main.css";

  import Header from "$lib/components/Header/Header.svelte";
  import Footer from "$lib/components/Footer.svelte";

  import pages from "$lib/utils/pageData";

  let currentPage: PageData;

  $: {
    const currentSubURL = $page.route.id || "";
    const filteredPages = pages.filter((page) => page.subURL === currentSubURL.substring(1));

    if (filteredPages.length === 1) {
      currentPage = filteredPages[0];
    } else {
      throw new ReferenceError(`Cannot fetch page data! Add entry for "${currentSubURL}" in src/utils/pageData.ts`);
    }
  }
</script>

<svelte:head>
  <title>{`Z-Site${currentPage.subURL === "" ? `` : `: ${currentPage.name}`}`}</title>
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
