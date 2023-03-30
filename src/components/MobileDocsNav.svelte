<script lang="ts">
  import logo from '../assets/Logo 1.svg';
  import rightArrow from '../assets/arrow-right.svg';
  import downArrow from '../assets/arrow-down.svg';
  import { page } from '$app/stores';
  import { slide, fade } from 'svelte/transition';

  $: activeLink = `${$page.url.pathname}`;

  let hidden = true;
  let showDocs = false;
  let showGettingStarted = false;
  let showGuides = false;

  const toggleMenu = () => {
    hidden = !hidden;
  };
  const toggleDocs = () => {
    showDocs = !showDocs;
  };
  const toggleGettingStarted = () => {
    showGettingStarted = !showGettingStarted;
  };
  const toggleGuides = () => {
    showGuides = !showGuides;
  };
  let y: number;
</script>

<svelte:window bind:scrollY={y} />

<div
  class:shadow-lg={y > 5}
  class="mobile"
>
  <div class="logoWrap">
    <img src={logo} alt="Logo" class="logo" />
    <a
      id="home"
      href="/"
      class="svelvet"
      >svelvet</a
    >
    <p class="version">
      v7.0.0
    </p>
  </div>
  <button class="mobile-menu-button" on:click={toggleMenu}>
    <div id="navMenu" class:active={!hidden}>
      <span /><span /><span />
    </div>
  </button>
</div>

{#if !hidden}
  <div
    transition:slide
    class="docsDropDown"
  >
    <ul>
      <li class:bg-rose-100={activeLink === '/'}>
        <a
          on:click={toggleMenu}
          href="/"
          class="home">Home</a
        >
      </li>

      <li>
        <button
          on:click={toggleGettingStarted}
          class="py-4 px-12 font-medium text-gray-800 flex justify-between w-full"
        >
          <span>Getting Started</span>
          {#if showGettingStarted}
            <img src={downArrow} alt="down arrow" />
          {:else}
            <img src={rightArrow} alt="right arrow" />
          {/if}
        </button>
      </li>

      {#if showGettingStarted}
        <ul transition:slide class="cursor-pointer bg-white">
          <li class:bg-rose-100={activeLink.includes('installation')}>
            <a
              on:click={toggleMenu}
              href="/docs/installation"
              class="block py-4 px-12 shadow-inner">Installation</a
            >
          </li>
          <li class:bg-rose-100={activeLink.includes('basic-usage')}>
            <a
              on:click={toggleMenu}
              href="/docs/basic-usage"
              class="block py-4 px-12">Basic Usage</a
            >
          </li>
          <li class:bg-rose-100={activeLink.includes('core-concepts')}>
            <a
              on:click={toggleMenu}
              href="/docs/core-concepts"
              class="block py-4 px-12">Core Concepts</a
            >
          </li>
        </ul>
      {/if}

      <li>
        <button
          on:click={toggleGuides}
          class="py-4 px-12 font-medium text-gray-800 flex justify-between w-full"
        >
          <span>Guides</span>
          {#if showGuides}
            <img src={downArrow} alt="down arrow" />
          {:else}
            <img src={rightArrow} alt="right arrow" />
          {/if}
        </button>
      </li>

      {#if showGuides}
        <ul transition:slide class="cursor-pointer bg-white">
          <li class:bg-rose-100={activeLink.includes('custom-nodes')}>
            <a
              on:click={toggleMenu}
              href="/docs/custom-nodes"
              class="block py-4 px-12 shadow-inner">Custom Nodes</a
            >
          </li>
          <li class:bg-rose-100={activeLink.includes('custom-edges')}>
            <a
              on:click={toggleMenu}
              href="/docs/custom-edges"
              class="block py-4 px-12">Custom Edges</a
            >
          </li>
          <li class:bg-rose-100={activeLink.includes('pan-and-zoom')}>
            <a
              on:click={toggleMenu}
              href="/docs/pan-and-zoom"
              class="block py-4 px-12">Pan and Zoom</a
            >
          </li>
          <li class:bg-rose-100={activeLink.includes('typescript')}>
            <a
              on:click={toggleMenu}
              href="/docs/typescript"
              class="block py-4 px-12">TypeScript</a
            >
          </li>
          <li class:bg-rose-100={activeLink.includes('testing')}>
            <a
              on:click={toggleMenu}
              href="/docs/testing"
              class="block py-4 px-12">Testing</a
            >
          </li>
          <li class:bg-rose-100={activeLink.includes('snap-to-grid')}>
            <a
              on:click={toggleMenu}
              href="/docs/snap-to-grid"
              class="block py-4 px-12">Snap-To-Grid</a
            >
          </li>
          <li class:bg-rose-100={activeLink.includes('HTML-Docs')}>
            <a
              on:click={toggleMenu}
              href="/docs/HTML-Docs"
              class="block py-4 px-12">HTML-Docs</a
            >
          </li>
          <li
            class:bg-rose-100={activeLink.includes(
              'Interactive Node Linking & Creation'
            )}
          >
            <a
              on:click={toggleMenu}
              href="/docs/Interactive-Nodes"
              class="block py-4 px-12">Interactive Node Linking & Creation</a
            >
          </li>
          <li
            class:bg-rose-100={activeLink.includes('Custom Svelte Components')}
          >
            <a
              on:click={toggleMenu}
              href="/docs/Custom-Svelte"
              class="block py-4 px-12">Custom Svelte Components</a
            >
          </li>
          <li class:bg-rose-100={activeLink.includes('Minimap')}>
            <a
              on:click={toggleMenu}
              href="/docs/Minimap"
              class="block py-4 px-12">Minimap</a
            >
          </li>
          <li
            class:bg-rose-100={activeLink.includes('Initial Zoom & Location')}
          >
            <a
              on:click={toggleMenu}
              href="/docs/Initial-Zoom-Location"
              class="block py-4 px-12">Initial Zoom & Location</a
            >
          </li>
          <li class:bg-rose-100={activeLink.includes('Node Classes')}>
            <a
              on:click={toggleMenu}
              href="/docs/Node-Classes"
              class="block py-4 px-12">Node Classes</a
            >
          </li>
          <li
            class:bg-rose-100={activeLink.includes(
              'Importing & Exporting Diagrams'
            )}
          >
            <a
              on:click={toggleMenu}
              href="/docs/importDiagrams"
              class="block py-4 px-12">Importing & Exporting Diagrams</a
            >
          </li>
          <li class:bg-rose-100={activeLink.includes('Diagram Boundary')}>
            <a
              on:click={toggleMenu}
              href="/docs/boundary"
              class="block py-4 px-12">Diagram Boundary</a
            >
          </li>
          <!-- <li class:bg-rose-100={activeLink.includes('Interactive Editable Nodes')}>
            <a on:click={toggleMenu} href="/docs/editNodes" class="block py-4 px-12">Interactive Editable Nodes</a>
          </li>
          <li class:bg-rose-100={activeLink.includes('Deletable Nodes')}>
            <a on:click={toggleMenu} href="/docs/delete" class="block py-4 px-12">Deletable Nodes</a>
          </li> -->
        </ul>
      {/if}

      <li class:bg-rose-100={activeLink.includes('blog')}>
        <a
          on:click={toggleMenu}
          target="_blank"
          href="https://medium.com/@alexander.zambrano/simplify-application-diagramming-with-svelvet-a8f664731243"
          class="block py-4 px-12 font-medium text-gray-800">Blogs</a
        >
      </li>
      <li>
        <a
          on:click={toggleMenu}
          href="https://github.com/open-source-labs/Svelvet"
          target="_blank"
          class="block py-5 px-12 font-medium text-gray-800">Github</a
        >
      </li>
    </ul>
  </div>
  <!-- <div class="bg-white w-screen h-screen" /> -->
{/if}

<style>
  #navMenu > span {
    display: block;
    width: 28px;
    height: 2px;
    border-radius: 9999px;
    background-color: rgb(104, 104, 104);
  }

  #navMenu > span:not(:last-child) {
    margin-bottom: 7px;
  }

  #navMenu,
  #navMenu > span {
    transition: all 0.2s ease-in-out;
  }

  #navMenu.active {
    transition-delay: 0.4s;
    transform: rotate(45deg);
  }
  #navMenu.active > span:nth-child(2) {
    width: 0;
  }

  #navMenu.active > span:nth-child(1),
  #navMenu.active > span:nth-child(3) {
    transition-delay: 0.2s;
  }

  #navMenu.active > span:nth-child(1) {
    transform: translateY(9px);
  }

  #navMenu.active > span:nth-child(3) {
    transform: translateY(-9px) rotate(90deg);
  }

  .mobile {
    justify-content: space-between;
    padding: 12px 32px;
    width: 100%;
    background-color: white;
    display: flex;
    border-bottom-width: 1px;
  }
  .docsDropDown {
    display: block;
    width: 100vw;
    border: 1px solid #ddd;
    background-color: #f4f4f4;
    color: #4a4a4a;
  }
  .docsDropDown ul {
    overflow-y: auto; 
  }
  .docsDropDown li {
  
  }
  .home {
    display: block;
    padding-top: 1rem;
    padding-bottom: 1rem;
    padding-left: 3rem;
    padding-right: 3rem;
    font-weight: 500;
    color: #1F2937;
  }
  .mobile-menu-button {
    outline: none;
    padding-left: 2rem;
  }
  .logoWrap {
    display: flex; 
    align-items: center;
  }
  .logo {
    aspect-ratio: auto; 
    height: 2rem;
  }
  .svelvet {
    font-size: 1.875rem;
    color: #4a5568;
    font-family: 'Nunito', sans-serif;
    font-weight: 500;
    letter-spacing: 0.05em;
    margin-left: 0.5rem;
    margin-right: 1.5rem;
  }
  .version {
    display: none;
  }
  @media (min-width: 800px) {
    .mobile {
    display: none;
    }
  }
    /* show version no. */
  @media (min-width: 400px) {
    .version {
      display: inline;
      font-size: 0.75rem;
      border-radius: 9999px;
      padding-left: 1rem;
      padding-right: 1rem;
      padding-top: 0.25rem;
      padding-bottom: 0.25rem;
      background-color: #FAE4E6;
      color: #E94646;
      letter-spacing: 0.1em;
    }
  }

  /* for drop shadow on nav to appear on scroll down */
  @media (max-height: 5px) {
    .mobile {
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    }
  }
</style>
