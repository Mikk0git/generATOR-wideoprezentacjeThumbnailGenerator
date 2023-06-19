<script lang="ts">
  import { onMount } from 'svelte';

  let receivedImage;
  export let ator: string 
  export let bg: string
  export let element1: string 
  export let element2: string 

  const send = async () => {
    try {
      const response = await fetch('http://localhost:3000/newImage', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          ator,
          bg,
          element1,
          element2
        })
      });

      if (response.ok) {
        console.log('Image saved successfully!');
        receivedImage = URL.createObjectURL(await response.blob());
      } else {
        console.error('Error saving image:', response.status, response.statusText);
      }
    } catch (error) {
      console.error('Error saving image:', error);
    }
  };

  onMount(async () => {
    try {
      const response = await fetch('http://localhost:3000/newImage');
      if (response.ok) {
        receivedImage = URL.createObjectURL(await response.blob());
      } else {
        console.error('Error retrieving image:', response.status, response.statusText);
      }
    } catch (error) {
      console.error('Error retrieving image:', error);
    }
  });
</script>

<main>
  <button class="generateBtn" on:click={send}>🎬</button>
  {#if receivedImage}
    <img class="thumbnail" src="{receivedImage}" alt="Otrzymane zdjęcie">
  {/if}
</main>
