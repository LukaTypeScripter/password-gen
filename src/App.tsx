import { useRef, useState } from 'react'
import './App.css'
import copyClip from './images/icon-copy.svg'
function App() {
  const [range, setRange] = useState<number>(0);
  const [levels, setLevels] = useState('')


  const myRef = useRef<HTMLDivElement | null>(null);
 
const passwordDificultie = (e: React.ChangeEvent<HTMLInputElement>) => {
  const range = parseInt(e.target.value);
 
  if (range > 0 && range <= 6) {
    myRef.current?.classList.add('too-weak');
    myRef.current?.classList.remove('weak', 'medium', 'strong');
    setLevels('TOO Weak')
  } else if (range > 6 && range <= 10) {
    myRef.current?.classList.add('weak');
    myRef.current?.classList.remove('too-weak', 'medium', 'strong');
    setLevels('')
    setLevels('weak')
  } else if (range > 10 && range <= 15) {
    myRef.current?.classList.add('medium');
    myRef.current?.classList.remove('too-weak', 'weak', 'strong');
    setLevels('')
    setLevels('medium')
  } else if (range > 15 && range <= 20) {
    myRef.current?.classList.add('strong');
    myRef.current?.classList.remove('too-weak', 'weak', 'medium');
    setLevels('')
    setLevels('strong')
  } else {
    myRef.current?.classList.remove('too-weak', 'weak', 'medium', 'strong');
  }
  
  setRange(range)
}
console.log(myRef);



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
        <span id='length'>{range ? range : '20'}</span>
      </div>
      <input type="range" min="0" max='20'  id='range-inpt' onChange={passwordDificultie}/>
      <div className='checkboxes'>
      <div className='first-checkbox'>
      <input type="radio" />
      <h3>Include Uppercase Letters</h3>
      </div>
      <div className='second-checkbox'>
      <input type="radio" />
      <h3>Include Lowercase Letters</h3>
      </div>
      <div className='third-checkbox'>
      <input type="radio" />
      <h3>Include Numbers</h3>
      </div>
      <div className='forth-checkbox'>
      <input type="radio" />
      <h3>Include Symbols</h3>
      </div>
      </div>
      <div className='level-cont'>
      <div className='difficulties'>
        <p id='strength'>STRENGTH</p>
       {/** i can do the logic by adding one more classname in ref,and then style in css. */}
        <p id='level' ref={myRef}>{levels}</p>
      </div>
      </div>
      <button className='btn'>
      <div className='flex'>
      <p className='gen'>GENERATE</p> <span><svg width="12" height="12" xmlns="http://www.w3.org/2000/svg"><path fill="#24232C" d="m5.106 12 6-6-6-6-1.265 1.265 3.841 3.84H.001v1.79h7.681l-3.841 3.84z"/></svg></span>
      </div>
      </button>
    </main>
    </div>
  )
}

export default App
