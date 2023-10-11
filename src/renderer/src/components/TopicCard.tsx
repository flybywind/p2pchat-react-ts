interface Props {
  topicId: string
  topicDesc: string
}
export default function TopicCard({ topicId, topicDesc }: Props): JSX.Element {
  return (
    <li className="topic-card collection-item ">
      <a>
        <span className="material-icons">tag_faces</span>
        <span>{topicId}</span>
      </a>
      <span className="secondary-content"> {topicDesc} </span>
    </li>
  )
}
