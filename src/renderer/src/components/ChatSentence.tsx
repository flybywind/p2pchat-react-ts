interface Props {
  user_name: string
  sentence: string
  is_me: boolean
}
export default function ChatSentence({ is_me, user_name, sentence }: Props): JSX.Element {
  return (
    <div
      className="chat-sentence"
      style={{
        flexDirection: is_me ? 'row' : 'row-reverse'
      }}
    >
      <section>
        <span className="fa-solid fa-face-smile"></span>
        <span>{user_name}</span>
      </section>
      <section className={'triangle ' + (is_me ? 'ltr' : 'rtl')}></section>
      <p className={is_me ? 'ltr' : 'rtl'}>
        {sentence}
        <time dateTime={'2023-10-04 15:45:23'}>2023-10-04 15:45:23</time>
      </p>
    </div>
  )
}
