<script lang="ts">
  import logo from '../assets/Logo 1.svg';
  import github from '../assets/github-icon-white.svg';
  import { page } from '$app/stores';
  import MobileHomeNav from './MobileHomeNav.svelte';
  import MobileDocsNav from './MobileDocsNav.svelte';
  import { signInWithGithub, logout, userInfo } from '../supabase-db';
  import { userInfoStore } from '../authStoreTs';
  import { articles } from '../data/articles';

  let { user, user_avatar } = userInfoStore;
  // use set method on user writable and set it equal to the return value of userIndo
  // user.set(userInfo);

  $: activeLink = `${$page.url.pathname}`;
  let y: number;

  export let mediumArticle;
</script>

<svelte:window bind:scrollY={y} />
<!-- Toggled Mobile Navbar -->
{#if activeLink.includes('docs')}
  <MobileDocsNav />
{:else}
  <MobileHomeNav />
{/if}

<!-- Navbar -->

<div class:shadow-lg={y > 5} class="desktop">
  <div class="logoWrap">
    <img src={logo} alt="Logo" class="logo" />
    <a
      id="home"
      href="/"
      on:click={() => {
        activeLink = '/';
      }}
      class="svelvet">svelvet</a
    >
    <p class="version">v7.0.0</p>
  </div>

  <nav class="navBar">
    <a href="/" id="home" class:selected={activeLink === '/'}>Home</a>
    <a
      href="https://svelvet.mintlify.app"
      id="docs"
      class:selected={activeLink.includes('docs')}>Docs</a
    >
    <a
      href="https://github.com/open-source-labs/Svelvet"
      id="github"
      target="_blank"
      rel="noreferrer">GitHub</a
    >
    <a
      href="https://stackblitz.com/edit/svelvet-v7?file=src/routes/+page.svelte"
      id="playground"
      class="hover:text-rose-500 {activeLink.includes('REPL')
        ? 'text-rose-500'
        : ''}">Sandbox</a
    >

    <!-- medium article links in data folder -->
    <div class="dropdown">
      <button class="dropbtn"> Blogs </button>
      <div class="dropdown-content">
        <ul>
          {#each articles as article}
            <li>
              <a
                target="_blank"
                rel="noreferrer"
                class:selected={activeLink.includes('blog')}
                href={`https://medium.com/${article.link}`}>{article.version}</a
              >
            </li>
          {/each}
        </ul>
      </div>
    </div>
  </nav>
</div>

<style>
  .login-container {
    display: flex;
    width: 8em;
    justify-content: space-between;
    border-style: solid;
    border-width: 1.25px;
    border-color: #ff4561;
    border-radius: 2em;
    align-items: center;
    flex: 1;
    float: left;
    padding: 0.25em 1em 0.25em;
  }

  .login-container img {
    display: inline-block;
    margin-left: 5px;
    height: 32px;
    width: 32px;
    border-radius: 50%;
  }

  /* Navbar container */

  /* The dropdown container */
  .dropdown {
    float: right;
    overflow: hidden;
    color: #374151;
  }

  /* Dropdown button */
  .dropdown .dropbtn {
    font-size: 0.875rem;
    line-height: 1.25rem;
    text-decoration: inherit;
    font-weight: 500; /* Important for vertical align on mobile phones */
    margin: 0; /* Important for vertical align on mobile phones */
  }

  /* Add a red background color to navbar links on hover */
  .dropdown a:hover,
  .dropdown:hover .dropbtn {
    background-color: #fff;
    color: #ff4561;
  }
  .dropbtn:hover {
    background-color: #fae4e6;
  }

  /* Dropdown content (hidden by default) */
  .dropdown-content {
    display: none;
    position: absolute;
    right: 0px;
    background-color: #f9f9f9;
    min-width: 160px;
    box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
    z-index: 1;
  }

  /* Links inside the dropdown */
  .dropdown-content a {
    float: none;
    padding: 12px 16px;
    text-decoration: none;
    display: block;
    text-align: left;
  }

  /* Add a pink background color to dropdown links on hover */
  .dropdown-content a:hover {
    background-color: #fae4e6;
  }

  /* Show the dropdown menu on hover */
  .dropdown:hover .dropdown-content {
    display: block;
  }

  .desktop {
    display: none;
    justify-content: space-between;
    padding: 12px 32px;
    width: 100%;
    background-color: white;
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
  .navBar {
    display: flex;
    font-size: 0.875rem;
    color: #6b7280;
    font-weight: 500;
    align-items: center;
    gap: 2.25rem;
  }
  .navBar a {
    color: #374151;
  }
  .navBar a:hover {
    color: #e94646;
  }
  a.selected {
    color: #e94646;
  }
  .btn-pink {
    display: inline-block;
    width: fit-content;
    text-align: center;
    padding: 0.25rem 0.75rem;
    text-align: center;
    background-color: #e94646;
    border-radius: 6rem;
    color: #fff;
    font-size: 0.9rem;
    transition: background-color 0.2s ease-in-out;
    box-shadow: 0 8px 32px 0 rgba(255, 255, 255, 0.37);
    backdrop-filter: blur(1.125rem);
  }
  .btn-pink:hover {
    background-color: #fff;
    outline: 1px solid #e94646;
    color: #e94646;
  }

  @media (min-width: 800px) {
    .desktop {
      display: none;
      display: flex;
      border-bottom-width: 1px;
    }
  }

  /* for drop shadow on nav to appear on scroll down */
  @media (max-height: 5px) {
    .desktop {
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    }
  }
</style>
