import {
  h,
  Component,
  useRef,
  useEffect,
  useOvermind,
} from 'overmind-components'
import * as styles from './styles'
import { Page } from '../../app/types'
import ViewSelector from '../ViewSelector'
import { css } from 'emotion'
import Search from '../Search'

const TopBar: Component = () => {
  const { state } = useOvermind()
  const mainRef = useRef()

  useEffect(() => {
    requestAnimationFrame(() => (mainRef.current.style.top = '0'))
  })

  return (
    <div ref={mainRef} className={styles.wrapper}>
      <a
        href="/"
        className={css(
          styles.link,
          state.page === Page.HOME && styles.selected
        )}
      >
        Home
      </a>
      <a
        href="/guides"
        className={css(
          styles.link,
          state.page === Page.GUIDES && styles.selected
        )}
      >
        Guides
      </a>
      <a
        href="/videos"
        className={css(
          styles.link,
          state.page === Page.VIDEOS && styles.selected
        )}
      >
        Videos
      </a>
      <a
        href="/api"
        className={css(styles.link, state.page === Page.API && styles.selected)}
      >
        Api
      </a>
      <Search />
      <ViewSelector />
    </div>
  )
}

export default TopBar
