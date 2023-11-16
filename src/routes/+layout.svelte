<script>
  import { page } from '$app/stores';
  import Footer from '../components/Footer.svelte';
  import TopNav from '../components/TopNav.svelte';
  import '../app.css';
</script>

{#if $page.url.pathname === '/testingplayground' || $page.url.pathname === '/testingplayground2'}
  <slot />
{:else}
  <div style="position: sticky; top: 0; left: 0; right: 0; z-index: 50;">
    <TopNav />
  </div>
  <slot />
  <Footer />
{/if}
