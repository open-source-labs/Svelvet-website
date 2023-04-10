<script lang="ts">
  import logo from '../assets/Logo 1.svg';
  import { slide } from 'svelte/transition';

  /* import store so that we can check if there's a user that is loggin in */
  import { userInfoStore } from '../authStoreTs';
  /* import supabase functionality for user login / logout */
  import { signInWithGithub, logout } from '../supabase-db';
  /* importing GitHub logo from assets */
  import github from '../assets/github-icon-white.svg';

  let { user, user_avatar } = userInfoStore;

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
    <p class="version">
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
    class="mobileDropDown"
  >
    <ul>
      <li>
        <a on:click={toggleMenu} href="/">Home</a>
      </li>
      <li>
        <a on:click={toggleMenu} href="/docs/installation">Docs</a>
      </li>
      <li>
        <a
          on:click={toggleMenu}
          href="https://github.com/open-source-labs/Svelvet"
          target="_blank"
          rel="noreferrer"
        >Github</a
        >
      <li>
        <a on:click={toggleMenu} href="https://codesandbox.io/s/svelvet-demo-v1gjl9">Sandbox</a>
      </li>
      <li>
        <a
          on:click={toggleMenu}
          target="_blank"
          rel="noreferrer"
          href="https://medium.com/@hor.val/svelvet-6-0-the-svelte-component-library-for-building-interactive-node-based-diagrams-81dafa2d50cd"
        >Blog 7.0</a
        >
      </li>

      <!-- added login / logout button link! -->
      {#if $user}
      <button on:click={logout}>
        <div class="login-container btn-pink">Logout 
        <img src={$user_avatar} alt="user pic"/>
      </div> 
      </button>
    {:else}
      <button on:click={signInWithGithub}><div class="login-container btn-pink">
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
  .mobileDropDown {
    position: absolute;
    width: 100%;
    border: 1px solid #ddd;
    padding: 0 2rem 1.5rem 0;
    background-color: #f4f4f4;
    color: #4a4a4a;
  }
  .mobileDropDown ul {
    text-align: center;
  }
  .mobileDropDown li {
    display: block;
    padding: 1.25rem 0;
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
    color: 1F2937;
    font-family: 'Nunito', sans-serif;
    font-weight: 500;
    letter-spacing: 0.05em;
    margin-left: 0.5rem;
    margin-right: 1.5rem;
  }
  .btn-pink {
    display: inline-block;
    width: fit-content;
    text-align: center;
    margin-top: 1rem;
    padding: .5rem 1rem;
    text-align: center;
    background-color: #E94646;
    border-radius: 2rem;
    color: #fff;
    font-size: 1.125rem;
    transition: background-color 0.2s ease-in-out;
    box-shadow: 0 8px 32px 0 rgba(255, 255, 255, 0.37);
    backdrop-filter: blur( 1.125rem ); 
  }
  .btn-pink:hover {
    background-color: #fff;
    outline: 1px solid #E94646;
    color: #E94646;
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
