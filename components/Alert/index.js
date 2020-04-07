import { useState } from 'react'
import Error from './Error'
import Success from './Success'

const Alert = ({ mode, children, callback = null }) => {
  const [visible, toggleVisible] = useState(true)

  if (mode === 'error') {
    return <Error visible={visible} toggleVisible={() => {
      toggleVisible()
      callback && callback()
    }}>{ children }</Error>
  }

  return (
    <Success visible={visible} toggleVisible={() => {
      toggleVisible()
      callback && callback()
    }}>
      { children }
    </Success>
  )
}

export default Alert