<script lang="ts">
  import { getRelativeURL, type PageMetadata } from "$lib/utils/routing";

  export let pageMetadata: PageMetadata;
</script>

<div
  id="pageTitleBanner"
  class={pageMetadata.name}
  style={`background-image: url(${getRelativeURL(`pageTitleBanners/${pageMetadata.subURL || "home"}.webp`)})`}
>
  <h1 id="pageTitle">{pageMetadata.name}</h1>
</div>

<style>
  #pageTitleBanner.Home {
    flex: 1 1 auto;
    display: flex;
    justify-content: center;
    align-content: center;
  }

  #pageTitleBanner.Home > h1 {
    margin: auto !important;
    padding: 0 !important;
  }

  #pageTitleBanner {
    margin: 0;
    background-color: var(--background); /* only used if fails to retrieve picture */
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center center;
  }

  #pageTitleBanner > h1 {
    margin: 0;
    padding: 1em 0em;
    color: white;
    text-shadow:
      -1px -1px 0 black,
      1px -1px 0 black,
      -1px 1px 0 black,
      1px 1px 0 black;
    text-align: center;
    font-size: 20vmin;
  }
</style>
