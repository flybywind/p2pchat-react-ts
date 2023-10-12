interface Props {
  topicId: string
  topicName: string
  topicDesc: string
}
export default function TopicCard({ topicId, topicName, topicDesc }: Props): JSX.Element {
  return (
    <div className="card mb-4">
      <div className="media ml-4">
        <div className="media-content">
          <div className="content">
            <p>
              <strong>{topicName}</strong>&space;@{topicId}
              <span className="icon is-small ml-4">
                <span className="fas fa-arrow-circle-right" aria-hidden="true"></span>
              </span>
            </p>
          </div>
          <div className="content"> {topicDesc} </div>
        </div>
      </div>
    </div>
  )
}
