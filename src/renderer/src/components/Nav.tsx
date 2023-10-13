import { preventDefault } from '@renderer/event/eventFunc'
import { useState } from 'react'
interface Props {
  onclick: (screen: string) => void
}

export default function Nav({ onclick }: Props): JSX.Element {
  const [activeIcon, setActiveIcon] = useState('square')

  function clickHandler(s: string) {
    onclick(s)
    console.log('set screen =', s)
    setActiveIcon(s)
  }
  function activeClass(a: string) {
    return activeIcon === a ? 'is-active is-warning' : 'is-outlined'
  }

  const navItemNum = 2
  const navItemCol = `is-${12 / navItemNum}`
  return (
    <div className="mynav columns is-mobile">
      <div className="column is-6 is-offset-3">
        <div className="columns is-mobile">
          <div
            onClick={(e) => preventDefault(e, clickHandler, 'square')}
            className={'column ' + navItemCol}
          >
            <div className={'button is-info ' + activeClass('square')}>
              <div className="fa-user-group"></div>
              <div>Square</div>
            </div>
          </div>

          <div
            className={'column ' + navItemCol}
            onClick={(e) => preventDefault(e, clickHandler, 'chatroom')}
          >
            <div className={'button is-info ' + activeClass('chatroom')}>
              <div className="fa-comment-dots"> </div>
              <div>ChatRoom</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
