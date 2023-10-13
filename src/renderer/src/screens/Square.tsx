import TopicCard from '@renderer/components/TopicCard'
import { Screen } from '@renderer/const'

interface Props {
  onActive: (s: string) => void
}
// Topic square, where topics and communities can be discovered
export default function SquareScreen({ onActive }: Props): JSX.Element {
  // todo: load topics from DHT
  return (
    <div id="square" className={'screen box ' + onActive(Screen.Square)}>
      <nav className="navbar is-link" role="navigation" aria-label="navigation">
        <div className="navbar-brand">
          <a className="navbar-item" href="/square">
            Square
          </a>
        </div>
        <div className="navbar-start">
          <div className="navbar-item has-dropdown is-hoverable">
            <a className="navbar-link">Location</a>
            <div className="navbar-dropdown">
              <a className="navbar-item">&lt; 10km</a>
              <a className="navbar-item">&lt; 100km</a>
              <a className="navbar-item">&lt; 1000km</a>
              <a className="navbar-item">global</a>
            </div>
          </div>
        </div>
        <div className="navbar-end">
          <div className="navbar-item">
            <input type="text" className="input is-median" />
            <button className="button is-link ">
              <span className="iconis-small">
                <span className="fas fa-search" aria-hidden="true"></span>
              </span>
            </button>
          </div>
        </div>
      </nav>
      <div className="box mt-4 ml-5">
        <TopicCard topicId={'123'} topicName={'chat anything'} topicDesc="Hello world" />
        <TopicCard topicId={'3-4-5'} topicName={'chat with lily'} topicDesc="Hello world" />
        <TopicCard topicId={'123'} topicName={'chat anything'} topicDesc="Hello world" />
        <TopicCard topicId={'123'} topicName={'chat anything'} topicDesc="Hello world" />
        <TopicCard topicId={'123'} topicName={'chat anything'} topicDesc="Hello world" />
        <TopicCard topicId={'3-4-5'} topicName={'chat with lily'} topicDesc="Hello world" />
        <TopicCard topicId={'3-4-5'} topicName={'chat with lily'} topicDesc="Hello world" />
        <TopicCard topicId={'3-4-5'} topicName={'chat with lily'} topicDesc="Hello world" />
      </div>
    </div>
  )
}
