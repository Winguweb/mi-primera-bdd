import { useState } from 'react'
import Error from './Error'
import Success from './Success'

const Alert = ({ mode, children }) => {
  const [visible, toggleVisible] = useState(true)

  if (mode === 'error') {
    return <Error visible={visible} toggleVisible={toggleVisible}>{ children }</Error>
  }

  return (
    <Success visible={visible} toggleVisible={toggleVisible}>
      { children }
    </Success>
  )
}

export default Alert