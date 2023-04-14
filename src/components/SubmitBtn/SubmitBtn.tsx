import React from 'react'
interface Props {
    handlePssword:() => void
}
export default function SubmitBtn({handlePssword}:Props) {
  return (
   <>
     <button className="btn" onClick={handlePssword}>
          <div className="flex">
            <p className="gen">GENERATE</p>{" "}
            <span>
              <svg width="12" height="12" xmlns="http://www.w3.org/2000/svg">
                <path
                  fill="#24232C"
                  d="m5.106 12 6-6-6-6-1.265 1.265 3.841 3.84H.001v1.79h7.681l-3.841 3.84z"
                />
              </svg>
            </span>
          </div>
        </button>
   </>
  )
}
