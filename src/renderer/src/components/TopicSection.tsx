import { preventDefault } from '@renderer/event/eventFunc'
import { useState } from 'react'

interface Props {
  title: string
}
export default function TopicSection({ title }: Props): JSX.Element {
  const [showList, setShowList] = useState(true)
  function getShowClass() {
    return showList ? '' : 'slide-in'
  }
  function toggleShowList() {
    showList ? setShowList(false) : setShowList(true)
  }
  return (
    <section>
      <div className="topic-category" onClick={(e) => preventDefault(e, toggleShowList)}>
        <p>{title}</p>
        <div className="arrow-down"></div>
      </div>
      <ul className={getShowClass()}>
        <li>{title}1-topic list</li>
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
    </section>
  )
}
