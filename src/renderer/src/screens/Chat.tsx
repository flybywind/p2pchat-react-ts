import { Screen } from '@renderer/const'

interface Props {
  onActive: (s: string) => void
}
export default function ChatScreen({ onActive }: Props): JSX.Element {
  return (
    <div id="chatroom" className={'screen box ' + onActive(Screen.Chatroom)}>
      <div className="box has-background-warning">
        <div className="side-topic-list">
          <ul>
            {/* <li>topic list</li>
            <li>topic list</li>
            <li>topic list</li>
            <li>topic list</li>
            <li>topic list</li>
            <li>topic list</li>
            <li>topic list</li>
            <li>topic list</li>
            <li>topic list</li>
            <li>topic list</li>
            <li>topic list</li>
            <li>topic list</li>
            <li>topic list</li>
            <li>topic list</li>
            <li>topic list</li>
            <li>topic list</li>
            <li>topic list</li>
            <li>topic list</li>
            <li>topic list</li>
            <li>topic list</li>
            <li>topic list</li>
            <li>topic list</li>
            <li>topic list</li>
            <li>topic list</li>
            <li>topic list</li>
            <li>topic list</li>
            <li>topic list</li>
            <li>topic list</li>
            <li>topic list</li>
            <li>topic list</li>
            <li>topic list</li> */}
            <li>topic list</li>
            <li>topic list</li>
          </ul>
        </div>
        <div className="chat-area">
          <header className="has-background-info">
            <p>
              topic name @<i>topic-id-123</i>
            </p>
            <p>topic description</p>
          </header>
          <article className="sentence media">
            <span className="fa-solid fa-face"></span>
            <div className="median-content">hello, my name is xxx</div>
          </article>
        </div>
      </div>
    </div>
  )
}
