import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'
import { mountSuspended } from '@nuxt/test-utils/runtime'
import SnakeGame from '~/components/SnakeGame.vue'

// The snake starts at (10, 12) heading up: 12 moves stay on the board and the 13th hits the wall.
const TICK_MS = 50
const TICKS_TO_WALL = 13

describe('SnakeGame', () => {
  beforeEach(() => {
    vi.useFakeTimers({ toFake: ['setInterval', 'clearInterval'] })
  })
  afterEach(() => {
    vi.useRealTimers()
  })

  it('draws the 24x40 board and ten food markers before starting', async () => {
    const wrapper = await mountSuspended(SnakeGame)

    expect(wrapper.findAll('#game-screen > div')).toHaveLength(24 * 40)
    expect(wrapper.findAll('.food')).toHaveLength(10)
    expect(wrapper.find('[aria-live]').text()).toContain('Press start-game')
  })

  it('starts, ends when the snake hits the wall and can be restarted', async () => {
    const wrapper = await mountSuspended(SnakeGame)
    const status = () => wrapper.find('[aria-live]').text()
    const display = (selector: string) => (wrapper.find(selector).element as HTMLElement).style.display

    await wrapper.find('#start-button').trigger('click')
    expect(status()).toContain('Playing')
    expect(display('#start-button')).toBe('none')

    await vi.advanceTimersByTimeAsync(TICK_MS * TICKS_TO_WALL)
    expect(status()).toContain('Game over')
    expect(display('#game-over')).not.toBe('none')
    expect(display('#congrats')).toBe('none')

    await wrapper.find('#game-over button').trigger('click')
    expect(status()).toContain('Press start-game')
    expect(display('#start-button')).not.toBe('none')
  })

  it('reacts to the arrow keys only while playing and ignores reversing', async () => {
    const wrapper = await mountSuspended(SnakeGame, { attachTo: document.body })
    const headCell = () => {
      const cells = wrapper.findAll('#game-screen > div')
      // The head is the only cell with rounded corners that is not the round food marker.
      const index = cells.findIndex((cell) => {
        const style = (cell.element as HTMLElement).style
        if (style.borderRadius === '50%') return false
        return Boolean(style.borderTopLeftRadius || style.borderTopRightRadius || style.borderBottomLeftRadius || style.borderBottomRightRadius)
      })
      return { x: index % 24, y: Math.floor(index / 24) }
    }

    expect(headCell()).toEqual({ x: 10, y: 12 })
    await wrapper.find('#start-button').trigger('click')

    document.dispatchEvent(new KeyboardEvent('keydown', { key: 'ArrowDown' })) // reversing: ignored
    await vi.advanceTimersByTimeAsync(TICK_MS)
    expect(headCell()).toEqual({ x: 10, y: 11 })

    document.dispatchEvent(new KeyboardEvent('keydown', { key: 'ArrowLeft' }))
    await vi.advanceTimersByTimeAsync(TICK_MS)
    expect(headCell()).toEqual({ x: 9, y: 11 })

    wrapper.unmount()
  })
})
