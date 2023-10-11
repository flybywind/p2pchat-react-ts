/* eslint-disable @typescript-eslint/explicit-function-return-type */
import Versions from './components/Versions'
import Nav from './components/Nav'
import TopicCard from './components/TopicCard'
import { useState } from 'react'
// import icons from './assets/icons.svg'

function App(): JSX.Element {
  const [screen, setScreen] = useState('square')

  function isActive(s: string): string {
    return screen === s ? 'col s12 show' : 'hide'
  }

  function activeScreen(s: string) {
    setScreen(s)
  }

  return (
    <div className="container row">
      <div id="square" className={'screen ' + isActive('square')}>
        <h3>Topic Square</h3>
        <div className="divider"></div>
        <ul className="collection">
          <li className="collection-item first-item">
            <span>Topic</span>
            <span className="secondary-content">Description</span>
          </li>
          <TopicCard topicId={'123'} topicDesc="Hello world" />
          <TopicCard topicId={'3-4-5'} topicDesc="Hello world" />
        </ul>
      </div>
      <div id="chatroom" className={'screen ' + isActive('chatroom')}>
        <div className="row">
          <div className="topicside col s4">
            <ul>
              <li>topic1</li>
              <li>topic1</li>
              <li>topic1</li>
              <li>topic1</li>
            </ul>
          </div>
          <div className="chat col s8">
            <div className="chatsection"></div>
            <div className="editmessage">
              <textarea name="messagebox" id="messagebox" cols="30" rows="2"></textarea>
            </div>
          </div>
        </div>
      </div>
      <footer>
        <Nav onclick={activeScreen}></Nav>
        <Versions></Versions>
      </footer>
    </div>
  )
}

export default App
