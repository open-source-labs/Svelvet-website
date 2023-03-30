<script>
  import DocsSideNav from '../../components/DocsSideNav.svelte';
</script>

<svelte:head>
  <title>Svelvet Documentation</title>
</svelte:head>
<!-- Ask Team: Clarify with team how slots are working and each different "main" page is rendering based on what user is clicking -->
<div class="flex justify-start text-gray-800 overflow-x-hidden sticky">
  <nav class="border">
    <DocsSideNav />
  </nav>
  <main class="md:max-w-6xl w-auto overflow-y-auto overflow-x-hidden h-fit p-8 pb-24">
    <slot />
  </main>
</div>

<style>
  .border {
    display: none;
    min-width: fit-content;
    padding-left: 2rem;
    padding-right: 2rem;
    overflow-y: auto;
    padding-bottom: 6rem;
  }
  @media (min-width: 800px) {
    .border {
      display: block;
    }
  }
</style>