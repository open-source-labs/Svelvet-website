  <script lang="ts">
    // @ts-nocheck
      import Svelvet from 'svelvet';
      
        const demoNodes = [
          {
            id: 1,
            position: { x: 10, y: 10 },
            data: { label: "default styling" },
            width: 150,
            height: 40,
            bgColor: "white"
		      },
        ];
      
      const initialEdges = [];
  </script>
<h2 class="text-4xl font-semibold mb-12">Importing & Exporting Diagrams</h2>

<p class="text-gray-600">
  <code class="bg-rose-100 rounded-lg p-1">Svelvet</code> allows you to download your diagram as a JSON file to share with others.
  This feature is optional and must be passed down as a prop <code class="bg-rose-100 rounded-lg p-1">shareable</code> to your Svelvet application.
  To access this feature, click the <code class="bg-rose-100 rounded-lg p-1">download</code> button in the bottom left of the diagram.
  After receiving the JSON file, open it and copy paste the JSON string into the <code class="bg-rose-100 rounded-lg p-1">upload</code> box in the bottom left of the diagram.
  Click the <code class="bg-rose-100 rounded-lg p-1">upload</code> button.
</p>

<div>
  <h3 class="text-xl font-semibold mt-12 mb-6">Implementing Importing and Exporting Diagrams</h3>
  <p class="text-gray-600">
    To test this feature, edit the diagram below and then click the <code class="bg-rose-100 rounded-lg p-1">download</code> button in the bottom right. 
    Once the download is complete, <code class="bg-rose-100 rounded-lg p-1">refresh</code> the page to reset the diagram.
    Copy the downloaded JSON string into the <code class="bg-rose-100 rounded-lg p-1">upload</code> box and click the <code class="bg-rose-100 rounded-lg p-1">button</code> to see the same diagram you downloaded.
  </p>
</div>


<Svelvet nodes={demoNodes} edges={initialEdges} shareable width={500} height={500} bgColor={'gainsboro'} nodeEdit nodeLink nodeCreate background />


<style>

</style>

