<script lang="ts">
  export let type;
  let numInArray: number = 0;
  let menuList: string[] = [];
    
  if (type == "ator") {
    menuList = ["atorKomentator", "atorZielon", "atorJackowski"];
  } else if (type == "bg") {
    menuList = ["corona"];
  } else if (type == "elements") {
    menuList = ["alien1", "biden1", "kaczorKrol", "klausSchwab1"];
  }

  const up = () => {
    if (menuList.length > numInArray) {
      numInArray += 1;
    }
    else{
        numInArray = 0
    }
  };

  const down = () => {
    if (numInArray > 0) {
      numInArray -= 1;
    }
    else{
        numInArray = menuList.length
    }
  };
</script>

<button id="up" on:click={up}>
  👆
</button>

{numInArray}

<button id="down" on:click={down}>
  👇
</button>
