import { useState } from 'react'
import './App.css'
import copyClip from './images/icon-copy.svg'
function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='container'>
      {/**header*/}
    <header>
      <h1 id='header-text'>Password Generator</h1>
      <div className='clipboard-cont'>
      <div className='password-text'>
        <h1 id='password'>PTx1f5DaFX</h1>
        <span><img src={copyClip} alt="clipboard" id='clip'/></span>
      </div>
      </div>
    </header>
{/**main */}
    <main>
      <div className='character-length'>
        <h4>Character Length</h4>
        <span>10</span>
      </div>
      <input type="range" min="0" max='20' id='range-inpt'/>
      <div>
        
      </div>
    </main>
    </div>
  )
}

export default App
