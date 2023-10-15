import ChatSentence from '@renderer/components/ChatSentence'
import TopicSection from '@renderer/components/TopicSection'
import { Screen } from '@renderer/const'

interface Props {
  onActive: (s: string) => void
}
export default function ChatScreen({ onActive }: Props): JSX.Element {
  return (
    <div id="chatroom" className={'screen box ' + onActive(Screen.Chatroom)}>
      <div className="box">
        <div className="side-topic-list">
          <TopicSection title="Mine" />
          <TopicSection title="Others" />
        </div>
        <div className="chat-area">
          <header>
            <h3>
              topic name <code>@ topic-id-123</code>
            </h3>
            <p>
              topic description topic description topic description topic description topic
              description topic description xxxxxx
            </p>
          </header>
          <div className="chat-history">
            <ChatSentence is_me={false} user_name={'john'} sentence={'hello Shane!'} />
            <ChatSentence
              is_me={true}
              user_name={'shane'}
              sentence={'hello John! Nice to meet u. It is a nice day, isnt it ?'}
            />
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
