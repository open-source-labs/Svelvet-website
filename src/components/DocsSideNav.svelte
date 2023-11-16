<!-- Complete sidebar rendering with routes -->
<script lang="ts">
  import { page } from '$app/stores';

  const gettingStartedLinks = [
    ['Installation', 'installation'],
    ['Basic Usage', 'basic-usage'],
    ['Core Concepts', 'core-concepts'],
  ];

  const guideLinks = [
    ['Custom Nodes', 'custom-nodes'],
    ['Custom Edges', 'custom-edges'],
    ['Panning and Zooming', 'pan-and-zoom'],
    ['Usage with Typescript', 'typescript'],
    ['Testing', 'testing'],
    ['Background Colors', 'CSS-Background'],
    ['Node Grouping', 'node-grouping'],
    ['Snap to Grid', 'snap-to-grid'],
    ['HTML in Nodes', 'HTML-Docs'],
    ['Interactive Node Linking and Creation', 'Interactive-Nodes'],
    ['Custom Svelte Components', 'Custom-Svelte'],
    ['Minimap', 'Minimap'],
    ['Initial Zoom and Location', 'Initial-Zoom-Location'],
    ['Node Classes', 'Node-Classes'],
    ['Importing and Exporting Diagrams', 'importDiagrams'],
    ['Diagram Boundary', 'boundary'],
    // ['Interactive Editable Nodes', 'editNodes'],
    // ['Deletable Nodes', 'delete'],
    ['Resizable Nodes', 'ResizableNodes'],
    ['Dynamic Anchors', 'DynamicAnchor'],
    ['Custom Anchor Position', 'CustomAnchorPosition'],
    ['Interactive Editable Nodes and Edges', 'editEdge'],
    ['Unfold and Collapse', 'Unfold-collapse'],
  ];

  $: activeLink = `${$page.url.pathname}`;
</script>

<!-- Ask Team: about implementation of foreach loop for links/routes -->
<div class="wrapper">
  <div class="installSection">
    <p class="title">Getting Started</p>
    <div class="item">
      {#each gettingStartedLinks as link}
        <a
          id={link[0]}
          href="/v6/{link[1]}"
          class="border-l px-4 hover:border-rose-300  {activeLink.includes(
            link[1]
          )
            ? 'text-rose-500 hover:text-rose-500 border-rose-300'
            : 'hover:text-gray-700 border-gray-100'}"
        >
          {link[0]}</a
        >
      {/each}
    </div>
  </div>
  <div class="guideSection">
    <p class="title">Guides</p>
    <div class="item">
      {#each guideLinks as link}
        <a
          id={link[0]}
          href="/v6/{link[1]}"
          class="border-l px-4 hover:border-rose-300  {activeLink.includes(
            link[1]
          )
            ? 'text-rose-500 hover:text-rose-500 border-rose-300'
            : 'hover:text-gray-700 border-gray-100'}">{link[0]}</a
        >
      {/each}
    </div>
  </div>
</div>

<style>
  .wrapper {
    display: none;
  }
  .installSection {
    display: flex;
    flex-direction: column;
    margin-top: 1.25rem;
    font-size: 0.875rem;
    width: 100%;
  }
  .guideSection {
    display: flex;
    flex-direction: column;
    margin-top: 1.25rem;
    font-size: 0.875rem;
  }
  .title {
    font-weight: 500;
    color: #1f2937;
    line-height: 3;
  }
  .item {
    display: flex;
    flex-direction: column;
    line-height: 2.5;
    color: #6b7280;
  }
  @media (min-width: 800px) {
    .wrapper {
      display: block;
    }
  }
</style>
