import { preventDefault } from '@renderer/event/eventFunc'
import { useState } from 'react'
interface Props {
  onclick: (screen: string) => void
}

export default function Nav({ onclick }: Props): JSX.Element {
  const [activeIcon, setActiveIcon] = useState('square')

  function clickHandler(s: string) {
    onclick(s)
    setActiveIcon(s)
  }
  function activeClass(a: string) {
    return activeIcon === a
      ? {
          active: 'active',
          icon: 'sharp'
        }
      : {
          active: '',
          icon: 'outlined'
        }
  }
  return (
    <>
      <div className="divider" style={{ marginBottom: '10px' }}></div>
      <div className="nav-wrapper row">
        <div className="col s3"></div>
        <ul className="s6">
          <li
            onClick={(e) => preventDefault(e, clickHandler, 'square')}
            className={activeClass('square').active}
          >
            <div>
              <i className={'material-icons-' + activeClass('square').icon}>topic</i>
            </div>
            <div>
              <span>Square</span>
            </div>
          </li>
          <li
            className={activeClass('chatroom').active}
            onClick={(e) => preventDefault(e, clickHandler, 'chatroom')}
          >
            <div>
              <i className={'material-icons-' + activeClass('chatroom').icon}>chat</i>
            </div>
            <div>
              <span>ChatRoom</span>
            </div>
          </li>
        </ul>
        <div className="col s3"></div>
      </div>
    </>
  )
}
