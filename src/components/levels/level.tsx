import React from 'react'
import '../levels/level.css'
interface Props {
    range:number
}
export default function Level({range}:Props) {
  return (
    <>
       {range === 0  ? (
        <>
        <div className='levels-cont'>
        <span className='level'></span>
        <span className='level'></span>
        <span className='level'></span>
        <span className='level'></span>
        </div>
        </>
    ): ''}
    {range > 0 && range <= 6 ? (
        <>
        <div className='levels-cont'>
        <span className='level too-weak'></span>
        <span className='level'></span>
        <span className='level'></span>
        <span className='level'></span>
        </div>
        </>
    ): ''}
     {range > 6 && range <= 10 ? (
        <>
        <div className='levels-cont'>
        <span className='level weak'></span>
        <span className='level weak'></span>
        <span className='level'></span>
        <span className='level'></span>
        </div>
        </>
    ): ''}
        {range > 10 && range <= 15 ? (
        <>
        <div className='levels-cont'>
        <span className='level medium'></span>
        <span className='level medium'></span>
        <span className='level medium'></span>
        <span className='level'></span>
        </div>
        </>
    ): ''}
    
    {range > 15 && range <= 20 ? (
        <>
        <div className='levels-cont'>
        <span className='level strong'></span>
        <span className='level strong'></span>
        <span className='level strong'></span>
        <span className='level strong'></span>
        </div>
        </>
    ): ''}
    </>
  )
}
