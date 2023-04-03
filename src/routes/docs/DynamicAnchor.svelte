<script>
  import Svelvet from 'svelvet';
  const initialNodes = [
    {
      id: 1,
      position: { x: 453, y: 70 },
      data: { label: 'Anchors adjust dynamically!' },
      width: 120,
      height: 60,
      bgColor: '#FFE4E6',
    },
    {
      id: 4,
      position: { x: 700, y: 210 },
      data: { label: 'Drag me around!' },
      width: 100,
      height: 100,
      bgColor: 'white',
    },
  ];

  const initialEdges = [
    {
      id: 'e1-4',
      source: 1,
      target: 4,
      type: 'bezier',
      animate: true,
      label: 'dynamic anchor',
    },
  ];
</script>

<div>
  <h2 class="text-4xl font-semibold mb-12">Dynamic Anchors</h2>
</div>

<p class="text-gray-600">
  <code class="code">Svelvet</code> has optional
  <code class="code">dynamic anchors</code>. You don't need to specify <code class="code">sourcePosition</code>
  and <code class="code">targetPosition</code> in your node object;  
  Svelvet generates optimal anchors based on the relative
  posistions between two nodes.
</p>

<br />



<p class="text-gray-600">
  Click <a class="text-rose-600 underline underline-offset-1"
    href="https://stackblitz.com/edit/sveltejs-kit-template-default-8sdfen?file=src/routes/+layout.svelte">here</a
  > for a sandbox, or drag the nodes below around to see the anchors change dynamically!
</p>

<div
  class="overflow-hidden my-8 border border-gray-200 rounded-lg shadow-lg shadow-slate-100"
>
  <Svelvet
    nodes={initialNodes}
    edges={initialEdges}
    width={1500}
    height={500}
    movement={true}
    background
    snap={true}
    snapTo={30}
    initialLocation={{ x: 753, y: 220 }}
  />
</div>



<!-- 
<iframe
  src="https://codesandbox.io/embed/feature-dynamic-anchors-fwmgmu?fontsize=14&hidenavigation=1&theme=dark"
  style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;"
  title="Feature Dynamic Anchors"
  allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
  sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
/>
 -->
<style>
  img {
    width: 500px;
    height: 500px;
  }
</style>
