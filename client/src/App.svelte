<script lang="ts">

  import ElementMenu from './lib/ElementMenu.svelte';
  import Generate from './lib/Generate.svelte';
</script>

<main>
  
  <h1>Ator Thumbnail Generator</h1>

  <div id="editor">
    <div class="menu"id="ator"><ElementMenu type = "ator"/></div>
    <div class="menu" id="bg" ><ElementMenu type = "bg" /></div>
    <div class="menu" id="element1"><ElementMenu type = "elements"/></div>
    <div class="menu" id="element2"><ElementMenu type = "elements"/></div>
  </div>
  
  <Generate />

 
</main>

<style>
  
</style>
