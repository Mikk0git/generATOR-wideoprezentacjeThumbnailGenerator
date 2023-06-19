<script lang="ts">

let ator: string = "atorKomentator";
let bg: string = "corona";
let element1: string = "alien1";
let element2: string = "biden1";

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