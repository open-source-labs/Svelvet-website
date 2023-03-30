<script lang="ts">
  import logo from '../assets/Logo 1.svg';
  import { slide } from 'svelte/transition';

  /* import store so that we can check if there's a user that is loggin in */
  import { userInfoStore } from '../authStoreTs';
  /* import supabase functionality for user login / logout */
  import { signInWithGithub, logout } from '../supabase-db';
  /* importing GitHub logo from assets */
  import github from '../assets/github-icon-white.svg';

  let { user, logged_in, user_avatar } = userInfoStore;

  let hidden = true;

  const toggleMenu = () => {
    hidden = !hidden;
  };

  let y: number;

  function clickOutside(node, { enabled: initialEnabled, cb }) {
    const handleOutsideClick = ({ target }) => {
      if (!node.contains(target)) {
        cb();
      }
    };

    function update({ enabled }) {
      if (enabled) {
        window.addEventListener('click', handleOutsideClick);
      } else {
        window.removeEventListener('click', handleOutsideClick);
      }
    }

    update({ enabled: initialEnabled });
    return {
      update,
      destroy() {
        window.removeEventListener('click', handleOutsideClick);
      }
    };
  }
</script>

<svelte:window bind:scrollY={y} />

<div
  class:shadow-lg={y > 5}
  class="mobile"
  use:clickOutside={{ enabled: !hidden, cb: () => (hidden = true) }}
>
  <div class="logoWrap">
    <img src={logo} alt="Logo" class="logo" />
    <a
      id="home"
      href="/"
      class="svelvet">svelvet</a
    >
    <p
      class="version"
    >
      v7.0.0
    </p>
  </div>
  <button class="mobile-menu-button" on:click={toggleMenu}>
    <!-- hamburger menu -->
    <div id="navMenu" class:active={!hidden}>
      <span /><span /><span />
    </div>
  </button>
</div>

{#if !hidden}
  <div
    transition:slide
    class="mobile absolute w-full mobile-menu border px-8 bg-gray-100 text-gray-700"
  >
    <ul class="text-center">
      <li>
        <a on:click={toggleMenu} href="/" class="block py-6">Home</a>
      </li>
      <li>
        <a on:click={toggleMenu} href="/docs/installation" class="block py-6">Docs</a>
      </li>
      <!-- //TODO create button for create page -->
      <li>
        <a
          on:click={toggleMenu}
          href="https://github.com/open-source-labs/Svelvet"
          target="_blank"
          rel="noreferrer"
          class="block py-6">Github</a
        >
      <li>
        <a on:click={toggleMenu} href="/playground" class="block py-6">Sandbox</a>
      </li>
      <li>
        <a
          on:click={toggleMenu}
          target="_blank"
          rel="noreferrer"
          href="https://medium.com/@justinwouters/svelvet-2-0-c6b2059734a6"
          class="block py-6">Blogs</a
        >
      </li>
      <!-- added login / logout button link! -->

      {#if $user}
      <button on:click={logout}>
        <div class="login-container rounded-full px-4 py-1 bg-rose-100 text-red-400 tracking-wider hover:text-rose-500 hover:bg-white">Logout 
        <img src={$user_avatar} alt="user pic"/>
      </div> 
      </button>
    {:else}
      <button on:click={signInWithGithub}><div class="login-container px-6 py-3 btn-primary">
        Log In
        <img src={github} alt="github-logo" />
      </div></button>
    {/if}
    </ul>
  </div>
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
  .login-container{
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
    padding: .25em 1em .25em;
  }
  .login-container img {
    display: inline-block;
    margin-left: 5px;
    height: 32px;
    width: 32px;
    border-radius: 50%;
  }
  .mobile {
    justify-content: space-between;
    padding: 12px 32px;
    width: 100%;
    background-color: white;
    display: flex;
    border-bottom-width: 1px;
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
  #navMenu {
    text-align: left;
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
      background-color: #fff1f2;
      color: #ef4444;
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
