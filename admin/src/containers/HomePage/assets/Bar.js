import React from 'react'

const BarSvg = (props) => {  
  return (
    <svg height={150} width={150} viewBox="0 0 386.1 386.1" {...props}>
      <g fill="#FFBD2E">
        <path d="M324.3 21.05h61.8v241.5h-61.8zM216.2 67.05h60.7v195.5h-60.7zM108.1 113.05h60.7v149.5h-60.7zM0 193.55h60.7v69H0z" />
      </g>
      <g fill="#00DE89">
        <path d="M324.3 261.55h61.8v103.5h-61.8zM216.2 261.55h60.7v103.5h-60.7zM108.1 261.55h60.7v103.5h-60.7zM0 261.55h60.7v103.5H0z" />
      </g>
    </svg>
  )
}

export default BarSvg