<script lang="ts">
  import ContributorsGrid from '../components/ContributorsGrid.svelte';
  import { contributors } from '../data/contributors';

  import { Svelvet, Node, Group, ThemeToggle, Minimap } from 'svelvet';
  import type { Theme } from 'svelvet';
  import copyIcon from '../assets/clipboard.svg';

  import Thickness from '../test-components/Thickness.svelte';
  import Noise from '../test-components/Noise.svelte';
  import Scale from '../test-components/Scale.svelte';
  import CircleColor from '../test-components/CircleColor.svelte';
  import DashCount from '../test-components/DashCount.svelte';
  import Output from '../test-components/Output.svelte';
  import { onMount } from 'svelte';

  const copyNPM = () => navigator.clipboard.writeText('npm install svelvet');
  const copyYarn = () => navigator.clipboard.writeText('yarn add svelvet');
  let svelvetWidth;
  let theme: Theme = 'light';
  $: zoom = (svelvetWidth / 800) * 0.6;

  $: minimapVisible = svelvetWidth >= 600;

  let readyToMount = false;

  onMount(() => {
    setTimeout(() => {
      readyToMount = true;
    }, 100);
  });
</script>

<svelte:head>
  <title>Svelvet</title>
</svelte:head>

<div class="css-blurry-gradient" />

<!-- ----------------------------- TOP LEVEL SECTION (intro & diagram) --------------------------------------- -->

<div class="topWrapper">
  <div class="topLeft">
    <h1 id="header">
      Build interactive, node-based UIs and diagrams in Svelte
    </h1>
    <p id="subheader">
      <code class="highlight" style="color:#E94646;">Svelvet</code> is a lightweight
      component library for building dynamic, customizable node graphs
    </p>
    <div class="buttonWrapper">
      <a href="https://svelvet.mintlify.app/getting-started" class="btn-pink"
        >Get Started</a
      >
    </div>
  </div>
  <div class="topRight">
    <div class="diagram" bind:clientWidth={svelvetWidth}>
      {#if readyToMount}
        <Svelvet
          edgeStyle="step"
          TD
          {theme}
          {zoom}
          controls
          minimap={minimapVisible}
          fitView="resize"
        >
          <Group
            position={{ x: -150, y: -100 }}
            width={600}
            height={700}
            color="goldenrod"
            groupName="parameters"
          >
            <Thickness />
            <Noise />
            <Scale />
            <CircleColor />
            <DashCount />
          </Group>
          <Output />
          <span id="state" class="note"> Stateful Anchors</span>
          <span id="groups" class="note">Group Boxes</span>
          <ThemeToggle main="light" alt="dark" slot="toggle" />
        </Svelvet>
      {/if}
    </div>
  </div>
</div>

<!-- ---------------------------------------- LEARN MORE SECTION --------------------------------------------- -->

<div class="pinkGradient">
  <div class="flex-container">
    <div class="text-container">
      <h3>Beautiful and Customizable</h3>
      <p>
        Svelvet allows you to easily create intuitive user interfaces and
        diagrams with pre-built components with node-to-node data flow, seamless
        zooming and panning, customizable edges and nodes and more!
      </p>
      <a href="https://svelvet.mintlify.app" class="btn-white"> Learn More </a>
    </div>
  </div>
</div>

<!-- ------------------------------------------ INSTALL SECTION ---------------------------------------------- -->

<div class="installWrapper">
  <div class="installInner1">
    <h3>Get Started Easily</h3>
    <p>
      Start mapping out your ideas with our NPM package. Simply provide your
      node data to the
      <code class="highlight" style="color:#E94646;">Svelvet</code> component and
      you're ready to show off your interactive diagram - no extra configuration
      needed!
    </p>
    <a
      href="https://svelvet.mintlify.app/getting-started/installation"
      class="btn-pink">More Info</a
    >
  </div>
  <div class="installInner2">
    <div class="typingWindowWrapper">
      <div class="typingWindow">
        <div class="typingNavBar">
          <div class="btn-circle" style="background-color: #FF605C;" />
          <div class="btn-circle" style="background-color: #FFBD44;" />
          <div class="btn-circle" style="background-color: #00CA4E;" />
        </div>
        <div class="typing-demo">npm install svelvet</div>
      </div>
    </div>
    <p>
      To install and save in your <code class="highlight">package.json</code>
      dependencies, run the command below using
      <strong>npm</strong>:
    </p>
    <div class="clipboard">
      <code>
        <span style="color:#9F2A39;">npm install</span> svelvet
      </code>
      <img on:click={copyNPM} src={copyIcon} alt="clipboard icon" />
    </div>
    <p>
      Or <strong>yarn</strong>:
    </p>
    <div class="clipboard">
      <code>
        <span style="color:#9F2A39;">yarn add</span> svelvet
      </code>
      <img on:click={copyYarn} src={copyIcon} alt="clipboard icon" />
    </div>
  </div>
</div>

<ContributorsGrid {contributors} />

<!-------------------------------------------------------------------------------------------------------
------------------------------------------ STYLING!! ----------------------------------------------------
---------------------------------------------------------------------------------------------------------  -->
<style>
  /* Inter font */
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700&display=swap');
  /* Nunito font */
  @import url('https://fonts.googleapis.com/css2?family=Nunito:wght@200;300;400;500;600;700&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Reenie+Beanie&display=swap');
  /* body {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: gray;
    width: 100vw;
    height: 100vh;
    padding: 0;
    margin: 0;
  } */

  .note {
    font-family: 'Reenie Beanie', sans-serif;
    position: absolute;
    color: inherit;
    width: 400px;
    transform: rotate(-3deg);
    font-weight: 200px;
    font-size: 40px;
  }
  #state {
    top: -30px;
    left: 620px;
  }
  #groups {
    top: 530px;
    left: 490px;
  }
  /*----------------------------- TOP LEVEL SECTION (intro & diagram) -------------------------------------*/
  .highlight {
    background-color: #fae4e6;
    border-radius: 0.5rem;
    padding: 0.25rem;
  }

  #header,
  #subheader {
    text-align: center;
  }
  .css-blurry-gradient {
    overflow-x: hidden;
    position: absolute;
    top: 60%;
    left: 50%;
    transform: translate(-50%, 0%);
    will-change: transform;
    width: 100%;
    height: 100%;
    border-radius: 50% 22% 40% 80%;
    filter: blur(120px);
    background: radial-gradient(
      circle at 50% 50%,
      rgb(247, 85, 56),
      rgba(205, 203, 211, 0)
    );
    opacity: 0.4;
    z-index: -1;
  }
  .topWrapper {
    display: flex;
    flex-direction: column;
    height: fit-content;
    width: auto;
    padding: 6vw 5vw 10vw 5vw;
    align-self: center;
  }
  .topLeft {
    order: 1;
    padding-bottom: 3vw;
    margin-right: 4vw;
    align-self: center;
  }
  .topRight {
    order: 2;
    align-self: center;
    width: 100%;
    max-width: 900px;
    padding-bottom: 6.25vw;
  }
  .topWrapper h1 {
    font-size: 2rem;
    font-weight: bold;
    color: #1f2937;
    padding-bottom: 1vw;
  }
  .topWrapper p {
    font-size: 1rem;
    color: #6b7280;
    padding-bottom: 2vw;
  }
  .diagram {
    width: 100%;
    border: 1px solid #e5e7eb;
    border-radius: 0.75rem;
    box-shadow: 0 4px 14px 0 rgba(0, 0, 0, 0.1);
    overflow: hidden;
    aspect-ratio: 800/500;
  }
  .buttonWrapper {
    display: flex;
    justify-content: center;
  }
  .btn-pink {
    display: inline-block;
    width: fit-content;
    text-align: center;
    padding: 0.5rem 1rem;
    text-align: center;
    background-color: #e94646;
    border-radius: 2rem;
    color: #fff;
    font-size: 1.125rem;
    transition: background-color 0.2s ease-in-out;
    box-shadow: 0 8px 32px 0 rgba(255, 255, 255, 0.37);
    backdrop-filter: blur(1.125rem);
  }
  .btn-pink:hover {
    background-color: #fff;
    box-shadow: 0 0 0 2px #e94646;
    color: #e94646;
  }
  /*---------------------------------------- LEARN MORE SECTION --------------------------------------------*/
  .pinkGradient {
    height: fit-content;
    background-image: radial-gradient(
      circle at 50% 50%,
      #e94646,
      rgba(205, 203, 211, 0)
    );
    color: white;
    box-shadow: 0px 8px 16px rgba(241, 198, 198, 0.508);
  }
  .flex-container {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    height: 100%;
  }
  .text-container {
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 8vw 5vw;
    margin: 2vw 0;
  }
  .text-container h3 {
    font-size: 2rem;
    font-weight: bold;
    text-align: center;
  }
  .text-container p {
    color: rgba(255, 255, 255, 0.8);
    font-size: 1rem;
    text-align: left;
    padding-bottom: 2vw;
  }
  .btn-white {
    box-sizing: border-box;
    display: inline-block;
    width: fit-content;
    text-align: center;
    padding: 0.5rem 1rem;
    background-color: #fff;
    border-radius: 99999px;
    color: #1f2937;
    font-size: 1.125rem;
    align-self: center;
  }
  .btn-white:hover {
    transition: background-color 0.2s ease-in-out;
    background-color: transparent;
    box-shadow: 0 0 0 2px #fff;
    color: #ffffff;
  }
  /*------------------------------------------ INSTALL SECTION ---------------------------------------------*/
  .installWrapper {
    display: flex;
    flex-direction: column;
    height: fit-content;
    width: 100%;
    padding: 5vw;
    align-self: center;
    text-align: left;
    margin: 10vw 0;
  }
  .installInner1 {
    order: 1;
    align-self: center;
    text-align: center;
  }
  .installInner1 h3 {
    font-size: 2rem;
    font-weight: bold;
    text-align: center;
    color: #374151;
  }
  .installInner1 p {
    margin-bottom: 1rem;
    color: #6b7280;
    text-align: left;
  }
  .installInner2 {
    display: none;
    flex-direction: column;
    padding: 5vw;
    order: 2;
    align-self: center;
  }
  .installInner2 p {
    color: #4b5563;
    margin: 1rem 0 1rem 0;
  }
  .typingWindowWrapper {
    justify-content: center;
    margin: 5vw;
  }
  .clipboard {
    display: flex;
  }
  .clipboard code {
    border-radius: 0.375rem;
    padding: 0.75rem;
    background-color: #fae4e6;
    color: #e94646;
    width: 100%;
  }
  .clipboard img {
    border-radius: 0.375rem;
    padding: 0.75rem;
    background-color: #fae4e6;
    margin-left: -1rem;
    cursor: pointer;
  }
  /*---------------------------------------------- TYPING WINDOW -------------------------------------------*/
  .typingWindow {
    overflow: hidden;
    border-radius: 0.5rem;
    background-color: #f0f0f0;
    min-width: fit-content;
    width: 100%;
    display: grid;
    place-items: center;
  }
  .typingNavBar {
    height: 1.75rem;
    width: 100%;
    background-color: #ccc;
    display: flex;
    align-items: center;
  }
  .btn-circle {
    float: left;
    margin-left: 7px;
    width: 12px;
    height: 12px;
    border-radius: 100%;
    background-color: #ff605c;
  }
  .typing-demo {
    width: 20ch;
    animation: typing 4s steps(20), blink 0.5s step-end infinite alternate;
    animation-iteration-count: infinite;
    white-space: nowrap;
    overflow: hidden;
    border-right: 3px solid;
    font-family: monospace;
    font-size: 16px;
    margin: 0.75rem 0 0.75rem 0;
  }
  /*---------------------------------------------- ANIMATIONS ----------------------------------------------*/

  @keyframes typing {
    0% {
      width: 0%;
    }
    25%,
    100% {
      width: 20ch;
    }
  }
  @keyframes blink {
    50% {
      border-color: transparent;
    }
  }
  /*-------------------------------------------- MEDIA QUERIES ---------------------------------------------*/
  /* portrait phone view */
  @media (min-width: 576px) {
    .topLeft {
      padding-bottom: 4vw;
    }
    .topWrapper p {
      margin: 1rem 0 4rem 0;
      margin-bottom: 1rem;
    }
  }
  /* tablet view */
  @media (min-width: 768px) {
    .topWrapper {
      align-self: center;
    }
    .topLeft {
      padding-bottom: 3vw;
    }
    .topWrapper h1 {
      font-size: 2.25rem;
    }
    .topWrapper p {
      font-size: 1.25rem;
      margin: 1rem 0 4rem 0;
      margin-bottom: 1rem;
    }

    .text-container {
      margin: 0 20vw;
    }
    .text-container h3 {
      font-size: 2.25rem;
    }
    .text-container p {
      font-size: 1.25rem;
    }
    .installWrapper {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      padding: 8vw;
      text-align: left;
      margin: 1vw 0;
    }
    .installInner1 {
      order: 1;
      padding-right: 5vw;
      text-align: center;
    }
    .installInner2 {
      order: 2;
      align-self: center;
      display: flex;
      flex-direction: column;
      padding: 5vw;
    }
    .installInner1 h3 {
      text-align: left;
    }
    .installInner1 p {
      text-align: left;
    }
    .typingWindowWrapper {
      width: 320px;
      margin: 0 0 3vw 0;
    }
  }
  /* desktop view */
  @media (min-width: 1024px) {
    .topWrapper {
      display: flex;
      flex-direction: row;
      justify-content: space-around;
      padding: 4vw;
      text-align: left;
    }
    .topLeft {
      order: 1;
    }
    .topRight {
      order: 2;
      align-self: center;
    }
    .installWrapper {
      padding: 5vw 15vw 5vw 15vw;
    }
  }
</style>
