<script lang="ts">
  import { page } from "$app/state";
  let { children } = $props();

  import "#lib/styles/color.css";
  import "#lib/styles/main.css";

  import Header from "#lib/components/Header/Header.svelte";
  import Footer from "#lib/components/Footer.svelte";
  import { getPageMetadataBySubURL, type PageMetadata } from "#lib/utils/routing.js";

  let pageMetadata: PageMetadata = $derived(updatePageMetadata());
  function updatePageMetadata(): PageMetadata {
    const currentSubURL = page.route.id || "";

    const maybePageMetadata = getPageMetadataBySubURL(currentSubURL);
    if (maybePageMetadata) {
      return maybePageMetadata;
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
    {@render children()}
  </main>
{:else}
  {@render children()}
{/if}

<Footer />
