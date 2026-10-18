<script setup lang="ts">
type Direction = 'up' | 'down' | 'left' | 'right'
interface Cell { x: number, y: number }

const COLS = 24
const ROWS = 40
const FOOD_TO_WIN = 10
const TICK_MS = 50
const INITIAL_FOOD: Cell = { x: 10, y: 5 }
const INITIAL_SNAKE: Cell[] = [
  { x: 10, y: 12 }, { x: 10, y: 13 }, { x: 10, y: 14 }, { x: 10, y: 15 }, { x: 10, y: 16 }, { x: 10, y: 17 },
  { x: 10, y: 18 }, { x: 11, y: 18 }, { x: 12, y: 18 }, { x: 13, y: 18 }, { x: 14, y: 18 }, { x: 15, y: 18 },
  { x: 15, y: 19 }, { x: 15, y: 20 }, { x: 15, y: 21 }, { x: 15, y: 22 }, { x: 15, y: 23 }, { x: 15, y: 24 },
]
const OPPOSITE: Record<Direction, Direction> = { up: 'down', down: 'up', left: 'right', right: 'left' }
const KEY_TO_DIRECTION: Record<string, Direction> = {
  ArrowUp: 'up',
  ArrowDown: 'down',
  ArrowLeft: 'left',
  ArrowRight: 'right',
}

const gameScreen = ref<HTMLElement | null>(null)
const score = ref(0)
const gameStarted = ref(false)
const gameOver = ref(false)
const won = ref(false)
const food = ref<Cell | null>({ ...INITIAL_FOOD })
const snake = ref<Cell[]>(INITIAL_SNAKE.map(cell => ({ ...cell })))
const direction = ref<Direction>('up')
let gameInterval: ReturnType<typeof setInterval> | null = null

function stopLoop() {
  if (gameInterval) {
    clearInterval(gameInterval)
    gameInterval = null
  }
}

function startGame() {
  gameStarted.value = true
  gameInterval = setInterval(moveSnake, TICK_MS)
}

function startAgain() {
  stopLoop()
  gameStarted.value = false
  gameOver.value = false
  won.value = false
  score.value = 0
  food.value = { ...INITIAL_FOOD }
  snake.value = INITIAL_SNAKE.map(cell => ({ ...cell }))
  direction.value = 'up'
  render()
}

function endGame(victory: boolean) {
  stopLoop()
  gameStarted.value = false
  gameOver.value = true
  won.value = victory
}

function generateNewFood(): Cell {
  let newFood: Cell
  do {
    newFood = { x: Math.floor(Math.random() * COLS), y: Math.floor(Math.random() * ROWS) }
  } while (snake.value.some(segment => segment.x === newFood.x && segment.y === newFood.y))
  return newFood
}

function moveSnake() {
  const head = snake.value[0]
  if (!head) return
  let { x, y } = head
  switch (direction.value) {
    case 'up': y--; break
    case 'down': y++; break
    case 'left': x--; break
    case 'right': x++; break
  }

  const inside = x >= 0 && x < COLS && y >= 0 && y < ROWS
  const collides = snake.value.some(segment => segment.x === x && segment.y === y)
  if (!inside || collides) {
    endGame(false)
    render()
    return
  }

  snake.value.unshift({ x, y })
  if (food.value && x === food.value.x && y === food.value.y) {
    score.value++
    if (score.value === FOOD_TO_WIN) {
      snake.value.unshift({ x, y })
      food.value = null
      endGame(true)
    } else {
      food.value = generateNewFood()
    }
  } else {
    snake.value.pop()
  }
  render()
}

function render() {
  const screen = gameScreen.value
  if (!screen) return
  screen.innerHTML = ''
  const cellSize = window.innerWidth > 1536 ? '10px' : '8px'
  const headRadius = '5px'

  for (let i = 0; i < ROWS; i++) {
    for (let j = 0; j < COLS; j++) {
      const cell = document.createElement('div')
      cell.classList.add('cell', 'black')
      cell.style.width = cellSize
      cell.style.height = cellSize
      cell.style.display = 'flex'
      cell.style.flexShrink = '0'

      const segmentIndex = snake.value.findIndex(segment => segment.x === j && segment.y === i)
      if (segmentIndex !== -1) {
        cell.style.backgroundColor = '#43D9AD'
        cell.style.opacity = String(1 - segmentIndex / snake.value.length)
        cell.classList.add('green')
        if (segmentIndex === 0) {
          switch (direction.value) {
            case 'up':
              cell.style.borderTopLeftRadius = headRadius
              cell.style.borderTopRightRadius = headRadius
              break
            case 'down':
              cell.style.borderBottomLeftRadius = headRadius
              cell.style.borderBottomRightRadius = headRadius
              break
            case 'left':
              cell.style.borderTopLeftRadius = headRadius
              cell.style.borderBottomLeftRadius = headRadius
              break
            case 'right':
              cell.style.borderTopRightRadius = headRadius
              cell.style.borderBottomRightRadius = headRadius
              break
          }
        }
      } else if (food.value && j === food.value.x && i === food.value.y) {
        cell.style.backgroundColor = '#43D9AD'
        cell.style.borderRadius = '50%'
        cell.style.boxShadow = '0 0 10px #43D9AD'
      }
      screen.appendChild(cell)
    }
  }
}

function move(next: Direction) {
  if (direction.value !== OPPOSITE[next]) direction.value = next
}

function onKeydown(event: KeyboardEvent) {
  if (gameStarted.value) {
    const next = KEY_TO_DIRECTION[event.key]
    if (next) {
      event.preventDefault()
      move(next)
    }
  } else if (event.key === ' ') {
    event.preventDefault()
    if (gameOver.value) startAgain()
    else startGame()
  }
}

onMounted(() => {
  document.addEventListener('keydown', onKeydown)
  window.addEventListener('resize', render)
  render()
})

onBeforeUnmount(() => {
  stopLoop()
  document.removeEventListener('keydown', onKeydown)
  window.removeEventListener('resize', render)
})
</script>

<template>
    <div id="console">

      <!-- bolts -->
      <img id="corner" src="/icons/console/bolt-up-left.svg" alt="" class="absolute top-2 left-2 opacity-70">
      <img id="corner"  src="/icons/console/bolt-up-right.svg" alt="" class="absolute top-2 right-2 opacity-70">
      <img id="corner"  src="/icons/console/bolt-down-left.svg" alt="" class="absolute bottom-2 left-2 opacity-70">
      <img id="corner"  src="/icons/console/bolt-down-right.svg" alt="" class="absolute bottom-2 right-2 opacity-70">


      <!-- Game Screen -->
      <div id="game-screen" ref="gameScreen"></div>

      <button v-show="!gameStarted && !gameOver" id="start-button" class="font-fira_retina" @click="startGame">start-game</button>

      <!-- Game Over -->
      <div v-show="gameOver && !won" id="game-over">
        <span class="font-fira_retina text-greenfy bg-bluefy-dark h-12 flex items-center justify-center">GAME OVER!</span>
        <button class="font-fira_retina text-menu-text text-sm flex items-center justify-center w-full py-6 hover:text-white" @click="startAgain">start-again</button>
      </div>

      <div v-show="won" id="congrats">
        <span class="font-fira_retina text-greenfy bg-bluefy-dark h-12 flex items-center justify-center">WELL DONE!</span>
        <button class="font-fira_retina text-menu-text text-sm flex items-center justify-center w-full py-6 hover:text-white" @click="startAgain">play-again</button>
      </div>

      <div id="console-menu" class="h-full flex flex-col items-end justify-between">

        <div>

        <div id="instructions" class="font-fira_retina text-sm text-white">
          <p>// use your keyboard</p>
          <p>// arrows to play</p>

          <div id="buttons" class="w-full flex flex-col items-center gap-1 pt-5">

              <button id="console-button" class="button-up" @click="move('up')">
                <img src="/icons/console/arrow-button.svg" alt="move up">
              </button>

              <div class="grid grid-cols-3 gap-1">
                <button id="console-button" class="button-left" @click="move('left')">
                  <img src="/icons/console/arrow-button.svg" alt="move left" class="-rotate-90">
                </button>

                <button id="console-button" class="button-down" @click="move('down')">
                  <img src="/icons/console/arrow-button.svg" alt="move down" class="rotate-180">
                </button>

                <button id="console-button" class="button-right" @click="move('right')">
                  <img src="/icons/console/arrow-button.svg" alt="move right" class="rotate-90">
                </button>
            </div>

          </div>
        </div>

        <!-- score board -->
        <div id="score-board" class="w-full flex flex-col pl-5">
          <p class="font-fira_retina text-white pt-5">// food left</p>

          <div id="score" class="grid grid-cols-5 gap-5 justify-items-center pt-5 w-fit">
            <div v-for="n in FOOD_TO_WIN" :key="n" class="food" :style="{ opacity: n <= score ? 1 : 0.3 }"></div>

          </div>
        </div>
      </div>
        <!-- skip -->
        <NuxtLink id="skip-btn" to="/about-me" class="font-fira_retina flex hover:bg-white/20">
          skip
        </NuxtLink>
        
      </div>
    </div>
    
  </template>
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
  padding-inline: 16px;
  padding-block: 8px;
  border-radius: 10px;
  border: 1px solid black;
  background-color: #FEA55F;
  color: black;
  cursor: pointer;
  position: absolute;
  bottom: 20%;
  left: 17%;
  font-size: 0.875rem; /* 14px */
  line-height: 1.25rem; /* 20px */
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

#console-button:hover {
  background-color: #010c15d8;
  box-shadow: #43D9AD 0 0 10px;
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

#game-over, #congrats > span {
  font-size: 1.5rem; /* 24px */
  line-height: 2rem; /* 32px */
}

#corner {
  width: 24px;
  height: 24px;
}

#skip-btn{
  font-size: 14px;
  color: white;
  padding-inline: 16px;
  padding-block: 8px;
  border: 2px solid white;
  border-radius: 0.5rem; /* 8px */
}


@media (min-width: 1024px) and (max-width: 1536px) {
  #game-screen {
    width: 192px;
    height: 320px;
  }

  #console {
    width: 420px;
    height: 370px;
    padding: 24px;

  }

  #start-button {
  padding-inline: 12px;
  padding-block: 6px;
  border-radius: 8px;
  bottom: 20%;
  left: 17%;
  font-size: 0.75rem; /* 14px */
  line-height: 1rem; /* 20px */
}

  #console-menu{
  height: 320px;
}

#instructions {
  font-size: 12px;
}

#console-button {
  width: 40px;
  height: 25px;
  border-radius: 6px;
}

#score-board {
  font-size: 12px;
}

.food {
  width: 6px;
  height: 6px;
}

#game-over, #congrats {
  position: absolute;
  bottom: 10%;
  color: #43D9AD;
  width: 192px;
}

#game-over, #congrats > span {
  font-size: 1.125rem; /* 18px */
  line-height: 1.75rem; /* 28px */
}

#corner {
  width: 20px;
  height: 20px;
}

#skip-btn{
  font-size: 12px;
  padding-inline: 12px;
  padding-block: 6px;
  border: 2px solid white;
  border-radius: 0.5rem; /* 8px */
}
}
</style>
