<script lang="ts">
  import logo from '../assets/Logo 1.svg';
  import rightArrow from '../assets/arrow-right.svg';
  import downArrow from '../assets/arrow-down.svg';
  import { page } from '$app/stores';
  import { slide, fade } from 'svelte/transition';
  import { articles } from '../data/articles';

  $: activeLink = `${$page.url.pathname}`;

  let hidden = true;
  let showGettingStarted = false;
  let showGuides = false;
  let showBlogs = false;

  const toggleMenu = () => {
    hidden = !hidden;
  };
  const toggleGettingStarted = () => {
    showGettingStarted = !showGettingStarted;
  };
  const toggleGuides = () => {
    showGuides = !showGuides;
  };
  const toggleBlogs = () => {
    showBlogs = !showBlogs;
  };
  let y: number;
</script>

<svelte:window bind:scrollY={y} />

<div class:shadow-lg={y > 5} class="mobile">
  <div class="logoWrap">
    <img src={logo} alt="Logo" class="logo" />
    <a id="home" href="/" class="svelvet">svelvet</a>
    <p class="version">v7.0.0</p>
  </div>
  <button class="mobile-menu-button" on:click={toggleMenu}>
    <div id="navMenu" class:active={!hidden}>
      <span /><span /><span />
    </div>
  </button>
</div>

{#if !hidden}
  <div transition:slide class="docsDropDown">
    <ul>
      <li class:selected={activeLink === '/'}>
        <a on:click={toggleMenu} href="/" class="outer">Home</a>
      </li>

      <li>
        <button on:click={toggleGettingStarted} class="toggle">
          <span>Getting Started</span>
          {#if showGettingStarted}
            <img src={downArrow} alt="down arrow" />
          {:else}
            <img src={rightArrow} alt="right arrow" />
          {/if}
        </button>
      </li>

      {#if showGettingStarted}
        <ul transition:slide class="list">
          <li class:selected={activeLink.includes('installation')}>
            <a on:click={toggleMenu} href="/v6/installation" class="nested"
              >Installation</a
            >
          </li>
          <li class:selected={activeLink.includes('basic-usage')}>
            <a on:click={toggleMenu} href="/v6/basic-usage" class="nested"
              >Basic Usage</a
            >
          </li>
          <li class:selected={activeLink.includes('core-concepts')}>
            <a on:click={toggleMenu} href="/v6/core-concepts" class="nested"
              >Core Concepts</a
            >
          </li>
        </ul>
      {/if}

      <li>
        <button on:click={toggleGuides} class="toggle">
          <span>Guides</span>
          {#if showGuides}
            <img src={downArrow} alt="down arrow" />
          {:else}
            <img src={rightArrow} alt="right arrow" />
          {/if}
        </button>
      </li>

      {#if showGuides}
        <ul transition:slide class="list">
          <li class:selected={activeLink.includes('custom-nodes')}>
            <a on:click={toggleMenu} href="/v6/custom-nodes" class="nested"
              >Custom Nodes</a
            >
          </li>
          <li class:selected={activeLink.includes('custom-edges')}>
            <a on:click={toggleMenu} href="/v6/custom-edges" class="nested"
              >Custom Edges</a
            >
          </li>
          <li class:selected={activeLink.includes('pan-and-zoom')}>
            <a on:click={toggleMenu} href="/v6/pan-and-zoom" class="nested"
              >Pan and Zoom</a
            >
          </li>
          <li class:selected={activeLink.includes('typescript')}>
            <a on:click={toggleMenu} href="/v6/typescript" class="nested"
              >TypeScript</a
            >
          </li>
          <li class:selected={activeLink.includes('testing')}>
            <a on:click={toggleMenu} href="/v6/testing" class="nested"
              >Testing</a
            >
          </li>
          <li class:selected={activeLink.includes('snap-to-grid')}>
            <a on:click={toggleMenu} href="/v6/snap-to-grid" class="nested"
              >Snap-To-Grid</a
            >
          </li>
          <li class:selected={activeLink.includes('HTML-Docs')}>
            <a on:click={toggleMenu} href="/v6/HTML-Docs" class="nested"
              >HTML-Docs</a
            >
          </li>
          <li
            class:selected={activeLink.includes(
              'Interactive Node Linking & Creation'
            )}
          >
            <a on:click={toggleMenu} href="/v6/Interactive-Nodes" class="nested"
              >Interactive Node Linking & Creation</a
            >
          </li>
          <li class:selected={activeLink.includes('Custom Svelte Components')}>
            <a on:click={toggleMenu} href="/v6/Custom-Svelte" class="nested"
              >Custom Svelte Components</a
            >
          </li>
          <li class:selected={activeLink.includes('Minimap')}>
            <a on:click={toggleMenu} href="/v6/Minimap" class="nested"
              >Minimap</a
            >
          </li>
          <li class:selected={activeLink.includes('Initial Zoom & Location')}>
            <a
              on:click={toggleMenu}
              href="/v6/Initial-Zoom-Location"
              class="nested">Initial Zoom & Location</a
            >
          </li>
          <li class:selected={activeLink.includes('Node Classes')}>
            <a on:click={toggleMenu} href="/v6/Node-Classes" class="nested"
              >Node Classes</a
            >
          </li>
          <li
            class:selected={activeLink.includes(
              'Importing & Exporting Diagrams'
            )}
          >
            <a on:click={toggleMenu} href="/v6/importDiagrams" class="nested"
              >Importing & Exporting Diagrams</a
            >
          </li>
          <li class:selected={activeLink.includes('Diagram Boundary')}>
            <a on:click={toggleMenu} href="/v6/boundary" class="nested"
              >Diagram Boundary</a
            >
          </li>
        </ul>
      {/if}

      <li>
        <button on:click={toggleBlogs} class="toggle">
          <span>Blogs</span>
          {#if showBlogs}
            <img src={downArrow} alt="down arrow" />
          {:else}
            <img src={rightArrow} alt="right arrow" />
          {/if}
        </button>
      </li>
      {#if showBlogs}
        <ul transition:slide class="list">
          {#each articles as article}
            <li class="nested">
              <a
                target="_blank"
                rel="noreferrer"
                class:selected={activeLink.includes('blog')}
                href={`https://medium.com/${article.link}`}>{article.version}</a
              >
            </li>
          {/each}
        </ul>
      {/if}
      <li>
        <a
          on:click={toggleMenu}
          href="https://github.com/open-source-labs/Svelvet"
          target="_blank"
          rel="noreferrer"
          class="outer">Github</a
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
    width: 100%;
    border: 1px solid #ddd;
    background-color: #f4f4f4;
    color: #1f2937;
  }
  .docsDropDown ul {
    overflow-y: auto;
  }
  .docsDropDown li.selected {
    background-color: #fae4e6;
    color: #e94646;
  }
  .toggle {
    padding: 1rem 3rem;
    font-weight: 500;
    display: flex;
    justify-content: space-between;
    width: 100%;
  }
  .toggle:hover {
    color: #e94646;
  }
  .outer {
    display: block;
    padding: 1rem 3rem;
    font-weight: 500;
  }
  .outer:hover {
    color: #e94646;
  }
  .nested {
    display: block;
    padding: 1rem 4rem;
  }
  .nested:hover {
    color: #e94646;
  }
  .list {
    cursor: pointer;
    background-color: #ffffff;
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
    color: #1f2937;
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
    .docsDropDown {
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
      background-color: #fae4e6;
      color: #e94646;
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
