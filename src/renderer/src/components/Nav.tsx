import { Screen } from '@renderer/const'
import { preventDefault } from '@renderer/event/eventFunc'
import { useState } from 'react'
interface Props {
  onclick: (screen: string) => void
}

export default function Nav({ onclick }: Props): JSX.Element {
  const [activeIcon, setActiveIcon] = useState(Screen.Square)

  function clickHandler(s: Screen) {
    onclick(s)
    setActiveIcon(s)
  }
  function activeClass(a: Screen) {
    return activeIcon === a ? 'is-active is-warning' : 'is-outlined'
  }

  const navItemNum = 2
  const navItemCol = `is-${12 / navItemNum}`
  return (
    <div className="mynav columns is-mobile">
      <div className="column is-6 is-offset-3">
        <div className="columns is-mobile">
          <div
            onClick={(e) => preventDefault(e, clickHandler, Screen.Square)}
            className={'column ' + navItemCol}
          >
            <div className={'button is-info ' + activeClass(Screen.Square)}>
              <div className="fa-user-group"></div>
              <div>{Screen.Square}</div>
            </div>
          </div>

          <div
            className={'column ' + navItemCol}
            onClick={(e) => preventDefault(e, clickHandler, Screen.Chatroom)}
          >
            <div className={'button is-info ' + activeClass(Screen.Chatroom)}>
              <div className="fa-comment-dots"> </div>
              <div>{Screen.Chatroom}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
