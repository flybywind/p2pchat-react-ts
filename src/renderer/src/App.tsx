import Nav from './components/Nav'
import TopicCard from './components/TopicCard'
import { useState } from 'react'
// import icons from './assets/icons.svg'

function App(): JSX.Element {
  const [screen, setScreen] = useState('square')

  function isActive(s: string): string {
    return screen === s ? '' : 'is-hidden'
  }

  function activeScreen(s: string) {
    setScreen(s)
  }

  return (
    <>
      <div id="square" className={'screen box ' + isActive('square')}>
        <nav className="navbar is-link" role="navigation" aria-label="dropdown navigation">
          <div className="navbar-brand">
            <a className="navbar-item" href="/square">
              Square
            </a>
          </div>
          <div className="navbar-start">
            <div className="navbar-item has-dropdown is-hoverable">
              <a className="navbar-link">Location</a>
              <div className="navbar-dropdown">
                <div className="navbar-item">&lt; 10km</div>
                <div className="navbar-item">&lt; 100km</div>
                <div className="navbar-item">&lt; 1000km</div>
                <div className="navbar-item">global</div>
              </div>
            </div>
          </div>
          <div className="navbar-end">
            <div className="navbar-item">
              <input type="text" className="input" />
              <button className="button">
                <span className="icon is-small">
                  <span className="fas fa-search" aria-hidden="true"></span>
                </span>
                <span>Search</span>
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
      <div id="chatroom" className={'screen box ' + isActive('chatroom')}>
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
      <footer>
        <Nav onclick={activeScreen}></Nav>
      </footer>
    </>
  )
}

export default App
