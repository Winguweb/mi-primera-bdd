import Error from './Error'
import Success from './Success'

const Alert = ({ mode, children }) => {
  if (mode === 'error') {
    return <Error>{ children }</Error>
  }

  return (
    <Success>
      { children }
    </Success>
  )
}

export default Alert