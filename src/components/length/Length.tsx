import React from 'react'
interface Props {
    range:number
}
export default function Length({range}:Props) {
  return (
    <>
     <div className="character-length">
          <h4>Character Length</h4>
          <span id="length">{range ? range : "20"}</span>
        </div>
    </>
  )
}
