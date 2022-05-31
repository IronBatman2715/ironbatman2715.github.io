<script lang="ts">
  import { getRelativeURL } from "@/utils/misc";

  console.error("Invalid sub-url entered, redirecting to home page.");
</script>

<svelte:head>
  <meta http-equiv="refresh" content={`0;url=${getRelativeURL()}`} />
</svelte:head>
