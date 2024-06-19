<script lang="ts">
  import { page } from "$app/stores";

  import "$lib/styles/color.css";
  import "$lib/styles/main.css";

  import Header from "$lib/components/Header/Header.svelte";
  import Footer from "$lib/components/Footer.svelte";
  import { getPageMetadataBySubURL, type PageMetadata } from "$lib/utils/routing";

  let pageMetadata: PageMetadata;
  $: {
    const currentSubURL = $page.route.id || "";

    const maybePageMetadata = getPageMetadataBySubURL(currentSubURL);
    if (maybePageMetadata) {
      pageMetadata = maybePageMetadata;
    } else {
      throw new ReferenceError(`Cannot fetch page metadata! Add entry for "${currentSubURL}" in src/utils/routing.ts`);
    }
  }
</script>

<svelte:head>
  <title>{`Z-Site${pageMetadata.subURL === "" ? `` : `: ${pageMetadata.name}`}`}</title>
  <meta name="description" content={pageMetadata.description} />
</svelte:head>

<Header {pageMetadata} />

{#if pageMetadata.subURL !== ""}
  <main id="content">
    <slot />
  </main>
{:else}
  <slot />
{/if}

<Footer />
