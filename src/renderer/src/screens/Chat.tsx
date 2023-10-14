import { Screen } from '@renderer/const'

interface Props {
  onActive: (s: string) => void
}
export default function ChatScreen({ onActive }: Props): JSX.Element {
  return (
    <div id="chatroom" className={'screen box ' + onActive(Screen.Chatroom)}>
      <div className="box">
        <div className="side-topic-list">
          <ul>
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
            <li>topic list</li>
            <li>topic list</li>
            <li>topic list</li>
            <li>topic list</li>
          </ul>
        </div>
        <div className="chat-area">
          <header>
            <h3>
              topic name @<code>topic-id-123</code>
            </h3>
            <p>
              topic description topic description topic description topic description topic
              description topic description xxxxxx
            </p>
          </header>
          <div className="chat-history">
            <div className="sentence">
              <span className="fa-solid fa-face"></span>
              <p>hello, my name is xxx</p>
            </div>
          </div>
          <div className="edit-area">
            <textarea name="" id="edit-box" rows={1}></textarea>
            <button>send</button>
          </div>
        </div>
      </div>
    </div>
  )
}
