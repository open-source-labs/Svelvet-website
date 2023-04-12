<script>
    import Contributor from './Contributor.svelte';
    export let contributors;
  </script>
  
  <article class="wrapper">
    <h2>Svelvet Contributors</h2>
    <ul class="contributors">
      {#each contributors as contributor}
        <Contributor {...contributor} />
      {/each}
    </ul>

    <p class="text">
      Svelvet is open source and has room for many more features. We welcome
      contributors!
    </p>
    <a
      href="https://github.com/open-source-labs/Svelvet"
      target="_blank"
      rel="noreferrer"
      class="btn-white"
      >See Svelvet on GitHub</a
    >
  </article>
  
  <style>
    .wrapper {
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      color: rgb(255, 255, 255);
      background: linear-gradient(to right, #F66F52, #f86f6f, rgb(251 113 133));
      padding-top: 2rem;
      padding-bottom: 5rem;
    }
    .wrapper h2 {
      font-size: 1.5rem;
      margin: 1rem 5rem;
      font-weight:bold;
      text-align: center;
    }
    .contributors {
      width: 60%;
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
      gap: 20px;
      margin: 0 auto;
    }
    .text {
      color: #f7fafc;
      text-align: center;
      margin-top: 1.25rem;
      padding: 2vw;
      margin-bottom: 0; 
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
      border: 2px solid transparent;
    }
    .btn-white:hover {
      transition: background-color 0.2s ease-in-out;
      background-color: transparent;
      border: 2px solid #e5e7eb;
      color: #ffffff;
    }
    @media (max-width: 699px) {
      .contributors {
        width: 50%;
      }
    }
  </style>
  