<script lang="ts">
  import { page } from "$app/stores";

  import "../styles/color.css";
  import "../styles/main.css";

  import Header from "$components/Header.svelte";
  import Footer from "$components/Footer.svelte";

  import pages from "$utils/pageData";

  $: currentSubURL = $page.routeId || "";
  $: currentPage = pages.filter((page) => page.subURL === currentSubURL)[0];
</script>

<svelte:head>
  <title>{`Z-Site${currentPage.subURL !== "" ? `: ${currentPage.name}` : ``}`}</title>
</svelte:head>

<Header {currentPage} />

{#if ($page.routeId || "") === ""}
  <slot />
{:else}
  <main id="content">
    <slot />
  </main>
{/if}

<Footer />
