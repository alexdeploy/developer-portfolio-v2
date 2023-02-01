<template>

  <div class="flex text-menu-text">

    <!-- count -->
    <div id="count" class="h-full lg:flex flex-col mx-10 hidden">

    </div>

    <div id="text-line" class="flex flex-col m-5 font-fira_retina">
      {{ text }}
    </div>
<!-- 
    <div class="code-editor">
      <pre class="flex">

          {{text}}

      </pre>
    </div> -->

  </div>
</template>

<script>
export default {

  props: {
    text: {
      type: String,
      default: '',
    },
  },
  /*data() {
    return {
      text: 
 `/**
* About me
* I have 5 years of experience in web 
* development lorem ipsum dolor sit amet, 
* consectetur adipiscing elit, sed do eiusmod
* tempor incididunt ut labore et dolore
* magna aliqua. Ut enim ad minim veniam,
* quis nostrud exercitation ullamco laboris
* nisi ut aliquip ex ea commodo consequat.
* Duis aute irure dolor in reprehenderit in
* 
* Duis aute irure dolor in reprehenderit in
* voluptate velit esse cillum dolore eu fugiat 
* nulla pariatur. Excepteur sint occaecat 
* officia deserunt mollit anim id est laborum.`, */
/*     };
  }, */
  computed: {
/*     lines() {
      return this.text
        .split("\n")
        .map(
          (line, index) => {
            
            // If is the first line, add /** at the beginning
            if (index === 0) {
              
              return `/**`;
            }
            return `* ${line}`
          })
        .join("\n");
    }, */
  },
/*   mounted(){
    // Get the number of lines
    const lines = this.text.split("\n").length;
    const line = this.text.split("\n");

    // Get the count div
    const count = document.getElementById('count');
    const textLine = document.getElementById('text-line');

    // Create a div for each line
    for (let i = 0; i < lines; i++) {

      // Create new divs
      const div = document.createElement('div');
      const divLine = document.createElement('div');

      // Get the line value
      const lineValue = line[i];

      // Add classes to the divs
      div.classList.add('flex', 'justify-end', 'border-menu-text');
      divLine.classList.add('w-full')
      
      // Add the line number
      div.innerHTML = i + 1;
      divLine.innerHTML = `<p class="font-fira_regular text-menu-text px-3">${lineValue}</p>`;

      // Append the divs to the parent divs
      count.appendChild(div);
      textLine.appendChild(divLine);
    }
  } */
};
</script>

<style scoped>
/* .code-editor {
  overflow: hidden;
  overflow-x: scroll;
} */

</style>
