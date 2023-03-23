<script lang="ts">
  import ContributorsGrid from '../components/ContributorsGrid.svelte';
  import { contributors } from '../data/contributors';

  import Svelvet from 'svelvet';

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

<!-- --------------------------------------------------------------------------------------------------------- -->
<!-- ----------------------------- TOP LEVEL SECTION (intro & graph view) ------------------------------------ -->
<!-- --------------------------------------------------------------------------------------------------------- -->

<div class="topWrapper">
  <div class='topLeft'>
    <h1>
      Mapping out your ideas with Svelte has never been easier
    </h1>
    <p>
      <code class="highlight">Svelvet</code> is a lightweight Svelte
      component library for building interactive node-based flow diagrams
    </p>
    <div class='buttonWrapper'><a href="/docs/installation" class="btn-pink">Get Started</a></div>
  </div>
  <div class="topRight">
    <div class="diagram">
      <Svelvet
        nodes={initialNodes}
        edges={initialEdges}
        initialLocation={{ x: 260, y: 250 }}
        initialZoom={2}
        width={550}
        height={550}
        background
      />
    </div>
  </div>
</div>

<!-- --------------------------------------------------------------------------------------------------------- -->
<!-- ---------------------------------------- LEARN MORE SECTION --------------------------------------------- -->
<!-- --------------------------------------------------------------------------------------------------------- -->

<div class="pinkGradient">
  <div class="flex-container">
    <div class="text-container">
      <h3>
        Beautiful and Customizable
      </h3>
      <p>
        Svelvet allows you to easily create intuitive flow diagrams using
        pre-built components with seamless zooming and panning, draggable
        interactivity, customizable edges and nodes and more!
      </p>
      <a href="/docs/core-concepts" class="btn-white">
        Learn More
      </a>
    </div>
  </div>
</div>


<!-- --------------------------------------------------------------------------------------------------------- -->
<!-- ------------------------------------------ INSTALL SECTION ---------------------------------------------- -->
<!-- --------------------------------------------------------------------------------------------------------- -->

<div class="installWrapper">
    <div class="typingWindowWrapper">
      <div class="overflow-hidden rounded-lg bg-gray-100 w-[320px] md:w-[380px] grid place-items-center wrapper">
        <div class="h-7 w-full bg-gray-300 flex items-center">
          <div class="btn bg-[#FF605C]" />
          <div class="btn bg-[#FFBD44]" />
          <div class="btn bg-[#00CA4E]" />
        </div>
        <div class="typing-demo my-3">npm install svelvet</div>
      </div>
    </div>
    <div class="blurbWrapper">
      <h3
        class="text-4xl font-bold my-4 text-center md:text-left text-gray-700"
      >
        Get Started Easily
      </h3>
      <p class="mb-4 text-gray-500 text-center md:text-left">
        Start mapping out your ideas with our NPM package. Simply provide your
        node data to the
        <code class="bg-rose-100 rounded-lg p-1">Svelvet</code> component and you're
        ready to show off your interactive diagram - no extra configuration needed!
      </p>
      <a
        href="/docs/installation"
        class="install-btn">Install Now</a
      >
    </div>
</div>

<!-- --------------------------------------------------------------------------------------------------------- -->
<!-- ------------------------------------------ CONTRIBUTORS SECTION ----------------------------------------- -->
<!-- --------------------------------------------------------------------------------------------------------- -->
<div>
  <ContributorsGrid {contributors} />
</div>



<style>
/* ------------------------------------------------------------------------------------------------------
----------------------------- TOP LEVEL SECTION (intro & graph view) ------------------------------------
--------------------------------------------------------------------------------------------------------- */

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
  width: auto;
  justify-content: space-between;
  padding: 6vw;
}

.topLeft {
  order: 1;
  align-self: center;
  padding-right: 5vw;
}

.topRight {
  order: 2;
  align-self: center;
  padding-bottom: 6.25vw;
}

  .topWrapper h1 {
    font-size: 2.5rem;
    font-weight: bold;
    color: #4b5563;
    padding-bottom: 1vw;
  }

  .topWrapper p {
    font-size: 1.25rem;
    margin-bottom: 2rem;
    color: #6b7280;
  }

  .highlight {
    color:#ed4747;
  }

  .diagram {
    background-color: #fff;
    width:auto;
    border: 1px solid #e5e7eb;
    border-radius: 0.75rem;
    box-shadow: 0 4px 14px 0 rgba(0, 0, 0, 0.1);
    position: relative;
    overflow: hidden;
  }

  .buttonWrapper {
    display: flex;
    justify-content: center;
  }

  .btn-pink {
    padding: 0.75rem 1.5rem;
    text-align: center;
    margin: 1.5rem;
    background-color: #ed4747;
    border-radius: 2rem;
    color: #fff;
    font-size: 1.125rem;
    transition: background-color 0.2s ease-in-out;
    box-shadow: 0 8px 32px 0 rgba(255, 255, 255, 0.37);
    backdrop-filter: blur( 1.125rem ); 
  }

  .btn-pink:hover {
    background-color: #fff;
    border: 1px solid #ed4747;
    color: #ed4747;
  }

/* ------------------------------------------------------------------------------------------------------
---------------------------------------- LEARN MORE SECTION ---------------------------------------------
--------------------------------------------------------------------------------------------------------- */

  .pinkGradient {
    height: 30rem;
    background-image: radial-gradient(
      circle at 50% 50%,
      #ed4747,
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
    justify-content: center;
  }

  .text-container h3 {
    font-size: 2.5rem;
    font-weight: bold;
    text-align: center;
    align-self: center;
  }

  .text-container p {
    color: rgba(255, 255, 255, 0.8);
    font-size: 1rem;
    margin: 0 28vw;
    text-align: center;
  }

  .btn-white {
    padding: 0.75rem 1.5rem;
    width: 9.25rem;
    margin: 2rem;
    text-align: center;
    background-color: #fff;
    border-radius: 2rem;
    color: #ed4747;
    font-size: 1.125rem;
    transition: background-color 0.2s ease-in-out;
    align-self: center;
  }

  .btn-white:hover {
    background-color: transparent;
    border: 1px solid #e5e7eb;
    color: #ffffff;
  }

/* ------------------------------------------------------------------------------------------------------
------------------------------------------ INSTALL SECTION ----------------------------------------------
--------------------------------------------------------------------------------------------------------- */
.installWrapper {
  display: flex;
  justify-content: space-between;
  height: fit-content;
  height: 100%;
  padding: 6rem 8rem;
}

.blurbWrapper {
  order: 2;
  height: 100%;
  padding-bottom: 6rem;
}

.typingWindowWrapper {
  order: 1;
  widows: 100%;
  padding-top: 2rem;
  padding-right: 8rem;
}

.install-btn {
    padding: 0.75rem 1rem;
    text-align: center;
    background-color: #ed4747;
    border-radius: 2rem;
    color: #fff;
    font-size: 1.125rem;
    transition: background-color 0.2s ease-in-out;
    box-shadow: 0 8px 32px 0 rgba(255, 255, 255, 0.37);
    backdrop-filter: blur( 1.125rem ); 
}

.install-btn:hover {
    background-color: #fff;
    border: 1px solid #ed4747;
    color: #ed4747;
  }



/* ------------------------------------------------------------------------------------------------------
---------------------------------------------- TYPING WINDOW --------------------------------------------
--------------------------------------------------------------------------------------------------------- */



  .wrapper {
    box-shadow: 3px 3px 15px 3px rgba(0, 0, 0, 0.1);
  }

  .btn {
    float: left;
    margin-left: 7px;
    width: 12px;
    height: 12px;
    border-radius: 100%;
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
  }



/* ------------------------------------------------------------------------------------------------------
---------------------------------------------- MAX VIEW -------------------------------------------------
--------------------------------------------------------------------------------------------------------- */


  @media (max-width: 768px) {
    .css-blurry-gradient {
      opacity: 0.8;
    }

    .typing-demo {
      animation: blink 0.5s step-end infinite alternate;
    }
    .topSection {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
    }

    .topLeft {
      flex: 50%;
    }

    .topRight {
      flex: 50%;
    }

    .topSection h1 {
      font-size: 5rem;
    }

    .diagram {
      max-width: 80%;
    }





    .pinkGradient {
      height: 60vw;
    }

    .text-container {
      justify-content: center;
      align-self: center;
      padding: 2vw;
    }

  .text-container h3 {
      font-size: 2rem;
      text-align: center;

    }

    .text-container p {
      text-align: center;
      margin: 0 3vw;
    }

  }

/* ------------------------------------------------------------------------------------------------------
---------------------------------------------- ANIMATIONS -----------------------------------------------
--------------------------------------------------------------------------------------------------------- */

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
</style>
