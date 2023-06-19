<!-- App.svelte -->
<script lang="ts">
  import ElementMenu from './lib/ElementMenu.svelte';
  import Generate from './lib/Generate.svelte';

  let atorSelectedValue: string;
  let bgSelectedValue: string;
  let element1SelectedValue: string;
  let element2SelectedValue: string;
</script>

<main>
  <h1>Ator Thumbnail Generator</h1>

  <div id="editor">
    <div class="menu" id="ator">
      <ElementMenu type="ator" bind:selectedValue={atorSelectedValue} />
    </div>
    <div class="menu" id="bg">
      <ElementMenu type="bg" bind:selectedValue={bgSelectedValue} />
    </div>
    <div class="menu" id="element1">
      <ElementMenu type="elements" bind:selectedValue={element1SelectedValue} />
    </div>
    <div class="menu" id="element2">
      <ElementMenu type="elements" bind:selectedValue={element2SelectedValue} />
    </div>
  </div>

  <Generate ator={atorSelectedValue} bg={bgSelectedValue} element1={element1SelectedValue} element2={element2SelectedValue}/><br>

</main>