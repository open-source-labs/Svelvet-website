<script lang="ts">
  import logo from '../assets/Logo 1.svg';
  import github from '../assets/github-icon-white.svg';
  import { page } from '$app/stores';
  import MobileHomeNav from './MobileHomeNav.svelte';
  import MobileDocsNav from './MobileDocsNav.svelte';
  import { signInWithGithub, logout, userInfo } from '../supabase-db';
  import { userInfoStore } from '../authStoreTs';

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

<div
class:shadow-lg={y > 5}
  class="desktop"
>
  <div class="logoWrap">
    <img src={logo} alt="Logo" class="logo" />
    <a
      id="home"
      href="/"
      on:click={() => {
        activeLink = '/';
      }}
      class="svelvet"
      >svelvet</a
    >
    <p class="version">
      v7.0.0
    </p>
  </div>

  <nav class="navBar">
    <a
      href="/"
      id="home"
      class:selected={activeLink === '/'}
      >Home</a
    >
    <a
      href="/docs/installation"
      id="docs"
      class:selected={activeLink.includes('docs')}
     >Docs</a
    >
    <a
      href="https://github.com/open-source-labs/Svelvet"
      id="github"
      target="_blank"
      rel="noreferrer"
      >Github</a
    >
    <a
      href="/playground"
      id="playground"
      class:selected={activeLink.includes('playground')}
      >REPL</a
    >

    <div class="dropdown">
      <button class="dropbtn">
        Blogs
      </button>
      <div class="dropdown-content">
        <a
          target="_blank"
          rel="noreferrer"
          class:selected={activeLink.includes('blog')}
          href='https://medium.com/@alexander.zambrano/simplify-application-diagramming-with-svelvet-a8f664731243/'
          >Svelvet 1.0</a
        >
        <a
          target="_blank"
          rel="noreferrer"
          class:selected={activeLink.includes('blog')}
          href="https://medium.com/gitconnected/svelvet-2-0-c6b2059734a6"
          >Svelvet 2.0</a
        >
        <a
          target="_blank"
          rel="noreferrer"
          class:selected={activeLink.includes('blog')}
          href="https://medium.com/@MauricioACastro/svelvet-4-0-the-power-of-html-is-now-inside-your-nodes-3d96823096e3"
          >Svelvet 4.0</a
        >
        <a
          target="_blank"
          rel="noreferrer"
          class:selected={activeLink.includes('blog')}
          href="https://medium.com/@efergus1/svelvet-5-0-a-community-driven-update-cfcc93e7b7a7"
          >Svelvet 5.0</a
        >
        <a
          target="_blank"
          rel="noreferrer"
          class:selected={activeLink.includes('blog')}
          href="https://medium.com/@hor.val/svelvet-6-0-the-svelte-component-library-for-building-interactive-node-based-diagrams-81dafa2d50cd"
          >Svelvet 6.0</a
        >
        <a
          target="_blank"
          rel="noreferrer"
          class:selected={activeLink.includes('blog')}
          href="https://medium.com/LINKGOESHERE"
        >Svelvet 7.0</a
        >
      </div>
    </div>

    <!-- Add logic for OAuth and conditionally render if the user is logged in, change button text to sign out and vice versa -->

    {#if $user}
      <button on:click={logout}>
        <!-- <div class="login-container rounded-full px-4 py-1 bg-rose-100 text-red-400 tracking-wider hover:text-rose-500 hover:bg-white">Logout
          <img src={$user_avatar} alt="user pic"/>
        </div> -->
        <div class="login-container btn-pink">
          Logout
          <img src={$user_avatar} alt="user pic" />
        </div>
      </button>

      <!-- <img id="github-avatar" alt="github-avatar-photo"> -->
    {:else}
      <button on:click={signInWithGithub}
        ><div class="login-container btn-pink">
          Log In
          <img src={github} alt="github-logo" />
        </div></button
      >
    {/if}
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
    float: left;
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
    background-color: #FAE4E6;
  }

  /* Dropdown content (hidden by default) */
  .dropdown-content {
    display: none;
    position: absolute;
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
    background-color: #FAE4E6;
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
    color: #1F2937;
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
    background-color: #FAE4E6;
    color: #E94646;
    letter-spacing: 0.1em;
  }
  .navBar {
    display: flex;
    font-size: 0.875rem;
    color: #6B7280;
    font-weight: 500;
    align-items: center;
    gap: 2.25rem;
  }
  .navBar a {
    color: #374151;
  }
  .navBar a:hover {
    color: #E94646;
  }
  a.selected {
    color: #E94646;
  }
  .btn-pink {
    display: inline-block;
    width: fit-content;
    text-align: center;
    padding: .25rem .75rem;
    text-align: center;
    background-color: #E94646;
    border-radius: 6rem;
    color: #fff;
    font-size: .9rem;
    transition: background-color 0.2s ease-in-out;
    box-shadow: 0 8px 32px 0 rgba(255, 255, 255, 0.37);
    backdrop-filter: blur( 1.125rem ); 
  }
  .btn-pink:hover {
    background-color: #fff;
    outline: 1px solid #E94646;
    color: #E94646;
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
