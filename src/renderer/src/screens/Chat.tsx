interface Props {
  onActive: (s: string) => void
}
export default function ChatScreen({ onActive }: Props): JSX.Element {
  return (
    <div id="chatroom" className={'screen box ' + onActive('chatroom')}>
      <div className="row">
        <div className="topicside col s4">
          <ul>
            <li>topic1</li>
            <li>topic1</li>
            <li>topic1</li>
            <li>topic1</li>
          </ul>
        </div>
        <div className="chat-window col s8">
          <div className="chatsection">
            <p>Hello</p>
          </div>
          <div className="editmessage">
            <textarea name="messagebox" id="messagebox" cols={30} rows={2}></textarea>
          </div>
        </div>
      </div>
    </div>
  )
}
