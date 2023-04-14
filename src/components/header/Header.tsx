import React from 'react'
import copyClip from "/home/luka/Desktop/password-gen/src/images/icon-copy.svg";
interface Props {
    passwords: string
    ClipBoard: () => void
}
export default function Header({passwords,ClipBoard}:Props) {
  return (
    <>
      <header>
        <h1 id="header-text">Password Generator</h1>
        <div className="clipboard-cont">
          <div className="password-text">
            <h1 id="password">{passwords ? passwords : "PTx1f5DaFX"}</h1>
            <span>
              <img
                src={copyClip}
                alt="clipboard"
                id="clip"
                onClick={ClipBoard}
              />
            </span>
          </div>
        </div>
      </header>
    </>
  )
}
