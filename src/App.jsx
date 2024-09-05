import { useState, useRef, createContext } from 'react'

// CSS
import './App.css'



// Components :
import Header from './components/header'
import Picking from './components/picking'
import Rules from './components/rules'


export const ScoreContext = createContext()

function App() {
  
  const [score, setScore] = useState([0, ''])

  return (
    <div className='app h-dvh flex flex-col items-center overflow-hidden'>

      <ScoreContext.Provider value={{score, setScore}}>

        <Header score={score[0]} />

        <Picking />

      </ScoreContext.Provider>

      <Rules />

    </div>
  )
}

export default App
