<footer class="footerWrap">
  <div class="footerTop">
    <div class="section">
      <a href="/docs/installation" class="sectionName"
        >Getting Started</a
      >
      <a href="/docs/installation">Installation</a>
      <a href="/docs/basic-usage">Basic Usage</a>
      <a href="/docs/core-concepts">Core Concepts</a>
    </div>
    <div class="section">
      <a href="/docs/custom-nodes" class="sectionName">Guides</a>
      <a href="/docs/custom-nodes">Custom Nodes</a>
      <a href="/docs/custom-edges">Custom Edges</a>
      <a href="/docs/pan-and-zoom">Panning and Zooming</a>
      <a href="/docs/typescript">Usage with TypeScript</a>
      <a href="/docs/testing">Testing</a>
      <a href="/docs/CSS-Background">CSS-Background</a>
      <a href="/docs/node-grouping">Node-Grouping</a>
      <a href="/docs/snap-to-grid">Snap-To-Grid</a>
      <a href="/docs/HTML-Docs">HTML-Docs</a>
      <a href="/docs/Interactive-Nodes">Interactive Node Linking & Creation</a>
      <a href="/docs/Custom-Svelte">Custom Svelte Components</a>
      <a href="/docs/Minimap">Minimap</a>
      <a href="/docs/Initial-Zoom-Location">Initial Zoom & Location</a>
      <a href="/docs/Node-Classes">Node Classes</a>
      <a href="/docs/importDiagrams">Importing & Exporting Diagrams</a>
      <a href="/docs/boundary">Diagram Boundary</a>
      <a href="/docs/editEdge">Interactive Editable Nodes and Edges</a> 
      <!-- <a href="/docs/delete">Deletable Nodes</a> -->
    </div>
    <div class="section">
      <a href="/" class="sectionName">Community</a>
      <a
        target="_blank"
        rel="noreferrer"
        href="https://medium.com/@alexander.zambrano/simplify-application-diagramming-with-svelvet-a8f664731243"
        >Svelvet 1.0</a
      >
      <a
        target="_blank"
        rel="noreferrer"
        href="https://medium.com/gitconnected/svelvet-2-0-c6b2059734a6"
        >Svelvet 2.0</a
      >
      <a
        target="_blank"
        rel="noreferrer"
        href="https://medium.com/@MauricioACastro/svelvet-4-0-the-power-of-html-is-now-inside-your-nodes-3d96823096e3"
        >Svelvet 4.0</a
      >
      <a
        target="_blank"
        rel="noreferrer"
        href="https://medium.com/@efergus1/svelvet-5-0-a-community-driven-update-cfcc93e7b7a7"
        >Svelvet 5.0</a
      >
      <a
        target="_blank"
        rel="noreferrer"
        href="https://medium.com/@hor.val/svelvet-6-0-the-svelte-component-library-for-building-interactive-node-based-diagrams-81dafa2d50cd"
      >Svelvet 6.0</a
      >
      <a
        target="_blank"
        rel="noreferrer"
        href="https://medium.com/@hor.val/LINKGOESHERE"
      >Svelvet 7.0</a
      >
      <a 
        target="_blank" 
        rel="noreferrer" 
        href="https://github.com/open-source-labs/Svelvet"
        >GitHub</a
      >
      <a 
        target="_blank" 
        rel="noreferrer" 
        href="https://www.linkedin.com/company/svelvet/"
        >LinkedIn</a
      >
      <a 
        target="_blank" 
        rel="noreferrer" 
        href="https://twitter.com/SvelvetOSLabs">Twitter</a>
      <a
        target="_blank"
        rel="noreferrer"
        href="https://stackoverflow.com/questions/tagged/svelvet"
        >Stack Overflow</a
      >
    </div>
  </div>
  <div class="footerBottom">
    <div style="font-size: 0.75rem;">
      &copy; 2023 Svelvet | <a
        target="_blank"
        rel="noreferrer"
        href="https://github.com/open-source-labs/Svelvet/blob/main/LICENSE"
        >MIT License</a
      >
    </div>
    <div style="font-size: 0.75rem;">
      Website designed by <a
        href="https://wendyhuynhdesign.com/"
        rel="noreferrer"
        target="_blank"
        style="color: #EC7489;">Wendy Huynh</a
      >
    </div>
  </div>
</footer>

<style>
  .footerWrap {
    padding-top: 2.5rem;
    padding-bottom: 1.25rem;
    border-top-width: 1px;
    font-size: 0.875rem;
  }
  .footerTop {
    display: none;     
    font-size: 0.875rem;
    padding: 1rem 4rem;
  }
  .footerBottom {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 1.25rem;
    color: #6b7280;
  }
  .section {
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
    color: #4B5563;
  }
  .sectionName {
    font-weight: 600;
    color: #374151;
  }
  @media (min-width: 768px) {
    .footerWrap {
      display: block;
      flex-direction: column;
    }
    .footerTop {
      display: flex;
      justify-content: space-around;
    }     
  }
</style>
