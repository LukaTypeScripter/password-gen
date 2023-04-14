import React from 'react'
interface Props {
    handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void
    isChecked: {
        [key: string]: boolean;
    }
}
export default function CheckBoxs({handleInputChange,isChecked}:Props) {
  return (
    <>
    <div className="checkboxes">
          <div className="first-checkbox">
            <input
              type="radio"
              name="uppercase"
              onChange={handleInputChange}
              checked={isChecked.uppercase}
             
            />
            <h3>Include Uppercase Letters</h3>
          </div>
          <div className="second-checkbox">
            <input
              type="radio"
              name="lowercase"
              onChange={handleInputChange}
              checked={isChecked.lowercase}
            />
            <h3>Include Lowercase Letters</h3>
          </div>
          <div className="third-checkbox">
            <input
              type="radio"
              name="numbers"
              onChange={handleInputChange}
              checked={isChecked.numbers}
            />
            <h3>Include Numbers</h3>
          </div>
          <div className="forth-checkbox">
            <input
              type="radio"
              name="symbols"
              onChange={handleInputChange}
              checked={isChecked.symbols}
            />
            <h3>Include Symbols</h3>
          </div>
        </div>
    </>
  )
}
