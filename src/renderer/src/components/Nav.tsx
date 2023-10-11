import { preventDefault } from '@renderer/event/eventFunc'
interface Props {
  onclick: (screen: string) => void
}

export default function Nav({ onclick }: Props): JSX.Element {
  return (
    <div className="nav-wrapper">
      <div className="col s3"></div>
      <ul className="s6">
        <li>
          <span onClick={(e) => preventDefault(e, onclick, 'square')}>Square</span>
        </li>
        <li className="breadcrumb"></li>
        <li>
          <span onClick={(e) => preventDefault(e, onclick, 'chatroom')}>ChatRoom</span>
        </li>
      </ul>
      <div className="col s3"></div>
    </div>
  )
}
