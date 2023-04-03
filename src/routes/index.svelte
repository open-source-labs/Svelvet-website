<script lang="ts">
  import ContributorsGrid from '../components/ContributorsGrid.svelte';
  import { contributors } from '../data/contributors';

  import Svelvet from 'svelvet';
  import copyIcon from '../assets/clipboard.svg';
  const copyNPM = () => navigator.clipboard.writeText('npm install svelvet');
  const copyYarn = () => navigator.clipboard.writeText('yarn add svelvet');

  const initialNodes = [
    {
      id: 1,
      position: { x: 225, y: 10 },
      data: { label: 'Add Images!' },
      width: 100,
      height: 100,
      bgColor: 'white',
      borderColor: 'transparent',
      image: true,
      src: 'https://svelvet.io/_app/assets/Logo%201-cc7b0baf.svg',
    },
    {
      id: 2,
      position: { x: 390, y: 180 },
      data: { label: 'Mixed Anchors' },
      width: 125,
      height: 40,
      bgColor: 'white',
      textColor: 'black',
      targetPosition: 'left',
    },
    {
      id: 3,
      position: { x: 225, y: 260 },
      data: { label: 'Output Node' },
      width: 100,
      height: 40,
      bgColor: '#FFE4E6',
      textColor: 'black',
    },
    {
      id: 4,
      position: { x: 25, y: 180 },
      data: { label: 'Drag me!' },
      width: 125,
      height: 40,
      bgColor: 'white',
      textColor: 'black',
      targetPosition: 'right',
    },
    {
      id: 5,
      position: { x: 390, y: 380 },
      data: { label: 'Custom Node' },
      width: 125,
      height: 40,
      bgColor: '#C8FFC7',
      textColor: 'black',
      borderColor: 'transparent',
      borderRadius: 0,
    },
    {
      id: 6,
      position: { x: 47.5, y: 360 },
      data: { label: 'Custom Node' },
      width: 80,
      height: 80,
      borderColor: '#FF4121',
      borderRadius: 30,
      bgColor: 'white',
      textColor: '#FF4121',
    },
  ];

  const initialEdges = [
    { id: 'e1-2', source: 1, target: 2, label: 'edge label' },
    {
      id: 'e2-3',
      source: 2,
      target: 3,
      animate: true,
      label: 'animated edges',
    },
    {
      id: 'e1-4',
      source: 1,
      target: 4,
      type: 'step',
      animate: true,
      edgeColor: '#FF4121',
    },
    {
      id: 'e2-5',
      source: 2,
      target: 5,
      label: 'colored edges',
      animate: true,
      arrow: true,
      edgeColor: '#FF4121',
      labelBgColor: '#1F2937',
      labelTextColor: '#FFE4E6',
    },
    { id: 'e2-6', source: 4, target: 6, type: 'straight' },
    {
      id: 'e2-7',
      source: 3,
      target: 6,
      type: 'smoothstep',
      label: 'colored label',
      labelBgColor: '#FF4561',
      labelTextColor: 'white',
      animate: true,
    },
  ];
</script>

<svelte:head>
  <title>Svelvet</title>
</svelte:head>

<div class="css-blurry-gradient" />

<!-- ----------------------------- TOP LEVEL SECTION (intro & diagram) --------------------------------------- -->

<div class="topWrapper">
  <div class='topLeft'>
    <h1>
      Create beautiful flow diagrams in Svelte
    </h1>
    <p>
      <code class="highlight" style="color:#E94646;">Svelvet</code> is a lightweight Svelte
      component library for building interactive node graphs 
    </p>
    <div class='buttonWrapper'><a href="/docs/installation" class="btn-pink">Get Started</a></div>
  </div>
  <div class="topRight">
    <div class="diagram">
      <Svelvet
        nodes={initialNodes}
        edges={initialEdges}
        initialLocation={{ x: 270, y: 245 }}
        initialZoom={1}
        width={550}
        height={550}
        background
      />
    </div>
  </div>
</div>

<!-- ---------------------------------------- LEARN MORE SECTION --------------------------------------------- -->

<div class="pinkGradient">
  <div class="flex-container">
    <div class="text-container">
      <h3>
        Beautiful and Customizable
      </h3>
      <p>
        Svelvet allows you to easily create intuitive flow diagrams using
        pre-built components with node-to-node data flow, seamless zooming and panning, customizable edges and nodes and more!
      </p>
      <a href="/docs/core-concepts" class="btn-white">
        Learn More
      </a>
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
      <code class="highlight" style="color:#E94646;">Svelvet</code> component and you're
      ready to show off your interactive diagram - no extra configuration needed!
    </p>
    <a
      href="/docs/installation"
      class="btn-pink">More Info</a
    >
  </div>
  <div class="installInner2">
    <div class="typingWindowWrapper">
      <div class="typingWindow">
        <div class="typingNavBar">
          <div class="btn-circle" style="background-color: #FF605C;" />
          <div class="btn-circle" style="background-color: #FFBD44;"/>
          <div class="btn-circle" style="background-color: #00CA4E;"/>
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
        <img
          on:click={copyNPM}
          src={copyIcon}
          alt="clipboard icon"
        />
      </div>
        <p>
          Or <strong>yarn</strong>:
        </p>
      <div class="clipboard">
        <code>
          <span style="color:#9F2A39;">yarn add</span> svelvet
        </code>
        <img
          on:click={copyYarn}
          src={copyIcon}
          alt="clipboard icon"
        />
      </div>
  </div>
</div>
    
<ContributorsGrid {contributors} />


<!-------------------------------------------------------------------------------------------------------
------------------------------------------ STYLING!! ----------------------------------------------------
---------------------------------------------------------------------------------------------------------  -->
<style>
/*----------------------------- TOP LEVEL SECTION (intro & diagram) -------------------------------------*/
  .highlight {
    background-color: #FAE4E6; 
    border-radius: 0.5rem; 
    padding: 0.25rem;
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
    text-align: left;
  }
  .topLeft {
    order: 1;
    padding-bottom: 3vw;
    align-self: center;
  }
  .topRight {
    order: 2;
    align-self: center;
    width: 100%;
    padding-bottom: 6.25vw;
  }
  .topWrapper h1 {
    font-size: 2rem;
    font-weight: bold;
    color: #1F2937;
    padding-bottom: 1vw;
  }
  .topWrapper p {
    font-size: 1rem;
    color: #6b7280;
    padding-bottom: 2vw;
  }
  .diagram {
    align-self: center;
    background-color: #fff;
    width: 100%;
    border: 1px solid #e5e7eb;
    border-radius: 0.75rem;
    box-shadow: 0 4px 14px 0 rgba(0, 0, 0, 0.1);
    overflow: hidden;
    height: 500px;
  }
  .buttonWrapper {
    display: flex;
    justify-content: center;
  }
  .btn-pink {
    display: inline-block;
    width: fit-content;
    text-align: center;
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
    outline: 2px solid #E94646;
    color: #E94646;
  }
/*---------------------------------------- LEARN MORE SECTION --------------------------------------------*/
  .pinkGradient {
    height: fit-content;
    background-image: radial-gradient(
      circle at 50% 50%,
      #E94646,
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
    display: inline-block;
    width: fit-content;
    text-align: center;
    padding: .5rem 1rem;
    background-color: #fff;
    border-radius: 99999px;
    color: #1F2937;
    font-size: 1.125rem;
    align-self: center;
  }
  .btn-white:hover {
    transition: background-color 0.2s ease-in-out;
    background-color: transparent;
    outline: 2px solid #e5e7eb;
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
    margin:1rem 0 1rem 0;
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
    background-color: #FAE4E6;
    color: #E94646;
    width: 100%;
  }
  .clipboard img {
    border-radius: 0.375rem;
    padding: 0.75rem;
    background-color: #FAE4E6;
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
    background-color: #FF605C;
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
    margin: .75rem 0 .75rem 0;
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
    .topRight {
      width: 550px;
    }
  }
  /* tablet view */
  @media (min-width: 768px) {
    .topWrapper {
      padding: 5vw 15vw 5vw 15vw;
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
    .diagram {
      height: 550px;
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
      justify-content: space-between;
      padding: 8vw;
      text-align: left;
    }
    .topLeft {
      order: 1;
      padding-right: 5vw;
    }
    .topRight {
      order: 2;
      align-self: center;
    }
    .installWrapper {
      padding: 5vw 15vw 5vw 15vw ;
    }
  }
</style>
