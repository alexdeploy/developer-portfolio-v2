<template>
    <div id="console">

      <!-- bolts -->
      <img src="icons/console/bolt-up-left.svg" alt="" class="absolute top-2 left-2 w-6 opacity-70">
      <img src="icons/console/bolt-up-right.svg" alt="" class="absolute top-2 right-2 w-6 opacity-70">
      <img src="icons/console/bolt-down-left.svg" alt="" class="absolute bottom-2 left-2 w-6 opacity-70">
      <img src="icons/console/bolt-down-right.svg" alt="" class="absolute bottom-2 right-2 w-6 opacity-70">


      <!-- Game Screen -->
      <div id="game-screen" ref="gameScreen"></div>

      <button id="start-button" class="font-fira_retina text-sm py-2 px-4" @click="startGame">start-game</button>

      <!-- Game Over -->
      <div id="game-over" class="hidden">
        <span class="font-fira_retina text-greenfy text-2xl bg-bluefy-dark h-12 flex items-center justify-center">GAME OVER!</span>
        <button class="font-fira_retina text-menu-text text-sm flex items-center justify-center w-full py-6 hover:text-white" @click="startAgain">start-again</button>
      </div>

      <div id="congrats" class="hidden">
        <span class="font-fira_retina text-greenfy text-2xl bg-bluefy-dark h-12 flex items-center justify-center">WELL DONE!</span>
        <button class="font-fira_retina text-menu-text text-sm flex items-center justify-center w-full py-6 hover:text-white" @click="startAgain">play-again</button>
      </div>

      <div id="console-menu" class="h-full flex flex-col items-end justify-between">

        <div>

        <div id="instructions" class="font-fira_retina text-sm text-white">
          <p>// use your keyboard</p>
          <p>// arrows to play</p>

          <div id="buttons" class="w-full flex flex-col items-center gap-1 pt-5">

              <button id="console-button" class="">
                <img src="/icons/console/arrow-button.svg" alt="">
              </button>

              <div class="grid grid-cols-3 gap-1">
                <button id="console-button">
                  <img src="/icons/console/arrow-button.svg" alt="" class="-rotate-90">
                </button>

                <button id="console-button">
                  <img src="/icons/console/arrow-button.svg" alt="" class="rotate-180">
                </button>

                <button id="console-button">
                  <img src="/icons/console/arrow-button.svg" alt="" class="rotate-90">
                </button>
            </div>

          </div>
        </div>

        <!-- score board -->
        <div id="score-board" class="w-full flex flex-col pl-5">
          <p class="font-fira_retina text-white pt-5">// food left</p>

          <div id="score" class="grid grid-cols-5 gap-5 justify-items-center pt-5 w-fit">
            <div class="food"></div>
            <div class="food"></div>
            <div class="food"></div>
            <div class="food"></div>
            <div class="food"></div>
            <div class="food"></div>
            <div class="food"></div>
            <div class="food"></div>
            <div class="food"></div>
            <div class="food"></div>

          </div>
        </div>
      </div>
        <!-- skip -->
        <NuxtLink to="/about-me" class="px-4 py-2 border-2 rounded-lg text-white font-fira_retina text-sm flex hover:bg-white/20">
          skip
        </NuxtLink>
        
      </div>
    </div>
    
  </template>
  
  <script>
  export default {
    data() {
      return {
        score: 0,
        gameInterval: null,
        gameStarted: false,
        food: { x: 10, y: 5 },
        snake: [
        { x: 10, y: 12 },
        { x: 10, y: 13 },
        { x: 10, y: 14 },
        { x: 10, y: 15 },
        { x: 10, y: 16 },
        { x: 10, y: 17 },
        { x: 10, y: 18 },
        { x: 11, y: 18 },
        { x: 12, y: 18 },
        { x: 13, y: 18 },
        { x: 14, y: 18 },
        { x: 15, y: 18 },
        { x: 15, y: 19 },
        { x: 15, y: 20 },
        { x: 15, y: 21 },
        { x: 15, y: 22 },
        { x: 15, y: 23 },
        { x: 15, y: 24 },
      ],
        direction: "up"
      };
    },
    methods: {
      startGame() {

        // hide start button
        document.getElementById("start-button").style.display = "none";

        // start game
        this.gameStarted = true;
        this.gameInterval = setInterval(this.moveSnake, 50);
      },
      startAgain() {
        // Mostrar botón de start-game
        document.getElementById("start-button").style.display = "block";
        
        // Ocultar game over
        document.getElementById("game-over").style.display = "none";
        document.getElementById("congrats").style.display = "none";


        // reiniciar datos del juego
        this.gameStarted = false;
        this.restartScore();
        this.food = {
          x: 10,
          y: 5
        };
        this.snake = [
            { x: 10, y: 12 },
            { x: 10, y: 13 },
            { x: 10, y: 14 },
            { x: 10, y: 15 },
            { x: 10, y: 16 },
            { x: 10, y: 17 },
            { x: 10, y: 18 },
            { x: 11, y: 18 },
            { x: 12, y: 18 },
            { x: 13, y: 18 },
            { x: 14, y: 18 },
            { x: 15, y: 18 },
            { x: 15, y: 19 },
            { x: 15, y: 20 },
            { x: 15, y: 21 },
            { x: 15, y: 22 },
            { x: 15, y: 23 },
            { x: 15, y: 24 },
          ],
        this.direction = "up";

        // limpiar intervalo de juego
        clearInterval(this.gameInterval);
        this.render();
      },
      // ... resto del código
      moveSnake() {
        let newX = this.snake[0].x;
        let newY = this.snake[0].y;
    
        switch (this.direction) {
          case "up":
            newY--;
            break;
          case "down":
            newY++;
            break;
          case "left":
            newX--;
            break;
          case "right":
            newX++;
            break;
        }
        
        // check if snake dont leave from game window
        // and check if snake dont eat itself
        if (
          newX >= 0 &&
          newX < 24 &&
          newY >= 0 &&
          newY < 40 &&
          !this.snake.find(
            snakeCell => snakeCell.x === newX && snakeCell.y === newY
          )
        ) {
          /* snake move next cell */
          this.snake.unshift({ x: newX, y: newY });
    
          /* check snake next cell is food */
          if (newX === this.food.x && newY === this.food.y) {
            
            // add score
            this.score++;

            // add food to score board
            const scoreFoods = document.getElementsByClassName("food");
            scoreFoods[this.score - 1].style.opacity = 1;

            // check if score is 10 (max score)
            if(this.score === 10) {

              // move snake head to food (fix snake head position at end)
              this.snake.unshift({ x: newX, y: newY }); // move head
              this.food = { x: null, y: null } // remove food
              clearInterval(this.gameInterval); // stop game
              document.getElementById('congrats').style.display = 'block' // show congrats

            } else {

              // create new food
              this.food = {
                x: Math.floor(Math.random() * 24),
                y: Math.floor(Math.random() * 40)
              };
            }

          } else {
            // if next cell is not food: snake pop last cell
            this.snake.pop();
          }
        } else {
          // GAME OVER: if snake leave from game window or eat itself
          clearInterval(this.gameInterval);
          document.getElementById('game-over').style.display = 'block'
        }
    
        this.render();
      },
      render() {
        let gameScreen = this.$refs.gameScreen;
        gameScreen.innerHTML = "";

        // responsive cell screen
        // const cellSize = (this.$refs.gameScreen.offsetWidth / 40) + "px";
        
        // eje y
        for (let i = 0; i < 40; i++) {
          // exe x
          for (let j = 0; j < 24; j++) {

            /* cell style */
            let cell = document.createElement("div");
            cell.style.width = '10px'
            cell.style.height = '10px'
            cell.style.display = "flex";
            cell.style.flexShrink = 0;
            cell.classList.add("black");
            
            /* Food cell style */
            if (j === this.food.x && i === this.food.y) {
              cell.style.backgroundColor = "#43D9AD";
              cell.style.borderRadius = "50%";
              cell.style.boxShadow = "0 0 10px #43D9AD";
            }
    
            /* Estilo de la serpiente a medida que va crediendo */
            let snakeCell = this.snake.find(
                snakeCell => snakeCell.x === j && snakeCell.y === i
            );

            if (snakeCell) {
                cell.style.backgroundColor = "#43D9AD";
                cell.style.opacity = 1 - (this.snake.indexOf(snakeCell) / this.snake.length);
              cell.classList.add("green");

            }

            /* Estilo de la cabeza */
            if (snakeCell && this.snake.indexOf(snakeCell) === 0) {

                let headRadius = "5px";
                if (this.direction === "up") {
                    cell.style.borderTopLeftRadius = headRadius;
                    cell.style.borderTopRightRadius = headRadius;
                }
                if (this.direction === "down") {

                    cell.style.borderBottomLeftRadius = headRadius;
                    cell.style.borderBottomRightRadius = headRadius;
                }
                if (this.direction === "left") {
                    cell.style.borderTopLeftRadius = headRadius;
                    cell.style.borderBottomLeftRadius = headRadius;
                }
                if (this.direction === "right") {
                    cell.style.borderTopRightRadius = headRadius;
                    cell.style.borderBottomRightRadius = headRadius;
                }
            }
            gameScreen.appendChild(cell);
            
        }
      }
      
    },
    restartScore(){
      this.score = 0;
      const scoreFoods = document.getElementsByClassName("food");
      for (let i = 0; i < scoreFoods.length; i++) {
        scoreFoods[i].style.opacity = 0.3;
      }
    }
  },
  mounted() {
    document.addEventListener("keydown", event => {
      if (this.gameStarted) {
        switch (event.keyCode) {
          case 37:
            if (this.direction !== "right") {
              this.direction = "left";
            }
            break;
          case 38:
            if (this.direction !== "down") {
              this.direction = "up";
            }
            break;
          case 39:
            if (this.direction !== "left") {
              this.direction = "right";
            }
            break;
          case 40:
            if (this.direction !== "up") {
              this.direction = "down";
            }
            break;
        }
      }
    });
  
    /* this.food = {
      x: Math.floor(Math.random() * 24),
      y: Math.floor(Math.random() * 40)
    }; */
  
    this.render();
  }
};
</script>

<style>
#console {
    width: 530px;
    height: 475px;
    border: 1px solid black;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: linear-gradient(to bottom, rgba(35, 123, 109, 1), rgba(67, 217, 173, 0.13));
    border-radius: 10px;
    padding: 30px;
    position: relative;

}

#game-screen {
    width: 240px;
    height: 400px;
    border-radius: 10px;
    background-color: rgba(1, 22, 39, 0.84);
    display: flex;
    flex-wrap: wrap;
    box-shadow: inset 0 0 10px #00000071;
}

#start-button {
  border-radius: 10px;
  border: 1px solid black;
  background-color: #FEA55F;
  color: black;
  cursor: pointer;
  position: absolute;
  bottom: 20%;
  left: 18%;
/*   top: 60%;
  left: 65%; */
}

#start-button:hover {
  background-color: rgb(255, 178, 119);
}

#console-menu{
  height: 400px;

}

#console-button {
  background-color: #010C15;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50px;
  height: 30px;
}

#instructions {
  background-color: rgba(1, 20, 35, 0.19);
  border-radius: 7px;
  padding: 10px;
}

.food {
  background-color: #43D9AD;
  border-radius: 50%;
  box-shadow: 0 0 10px #43D9AD;
  width: 8px;
  height: 8px;
  opacity: 0.3;
}

#game-over, #congrats {
  position: absolute;
  bottom: 12%;
  color: #43D9AD;
  width: 240px;
}
</style>