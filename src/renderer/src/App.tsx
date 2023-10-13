import SquareScreen from './screens/Square'
import Nav from './components/Nav'
import { useState } from 'react'
import ChatScreen from './screens/Chat'
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
      <SquareScreen onActive={isActive} />
      <ChatScreen onActive={isActive} />
      <footer>
        <Nav onclick={activeScreen}></Nav>
      </footer>
    </>
  )
}

export default App
