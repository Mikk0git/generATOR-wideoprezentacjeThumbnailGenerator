<script lang="ts">

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
    } else {
      console.error('Error saving image:', response.status, response.statusText);
    }
  } catch (error) {
    console.error('Error saving image:', error);
  }
};
</script>


<button class="generateBtn" on:click={send}>🎬</button>