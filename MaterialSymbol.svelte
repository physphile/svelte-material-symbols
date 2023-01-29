<script lang="ts">
  export let name: string;
  export let type: "outlined" | "rounded" | "sharp";

  export let opticalSize = 48;
  export let grade = 0;
  export let weight = 500;
  export let filled = false;
  let className = "";
  export { className as class };

  const style = `
  font-variation-settings:
  'FILL' ${+filled},
  'wght' ${weight},
  'GRAD' ${grade},
  'opsz' ${opticalSize}
`;

</script>

<span class={`material-symbols-${type} ${className}`} {style}>
  {name}
</span>

<style>
</style>
