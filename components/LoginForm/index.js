import { useState } from 'react'
import Loader from '../Loader'
import Logo from '../../assets/wingudata-logo.svg'
const LoginForm = props => {
  const [ email, setEmail ] = useState('')
  const [ password, setPassword ] = useState('')
  
  const handleSubmit = async (e) => {
    e.preventDefault()    
    props.submit({
      email, password
    })
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="w-1/2"
    >
      <div className="mb-4 text-center">
        <Logo />
        <div className="text-center text-purple">
          <span>Mi Primera Base de Datos</span>
        </div>
      </div>
      <div className="mb-4">
        <label
          className="block text-gray-wingu text-sm mb-2 focus-within:text-purple-wingu"
          htmlFor="email"
        >
          Correo electrónico
        </label>
        <input
          className="appearance-none border-2 border-light-gray rounded w-full py-2 px-3 text-gray-wingu leading-tight focus:outline-none focus:border-purple-wingu"
          id="email"
          type="text"
          value={email}
          onChange={event => {
            if (props.errorMessage) {
              props.handleErrorMessage(null)
            }
            setEmail(event.target.value)
          }}
        />
      </div>
      <div className="mb-6">
        <label
          className="block text-gray-wingu text-sm mb-2 focus-within:text-purple-wingu"
          htmlFor="password"
        >
          Contraseña
        </label>
        <input
          className="appearance-none border-2 border-light-gray rounded w-full py-2 px-3 text-gray-wingu mb-3 leading-tight focus:outline-none focus:border-purple-wingu"
          id="password"
          type="password"
          value={password}
          onChange={event => {
            if (props.errorMessage) {
              props.handleErrorMessage(null)
            }
            setPassword(event.target.value)
          }}
        />
        <div>
          <a href="https://dev-test-uploads-wingu.s3.amazonaws.com/wingudata/Te%CC%81rminos+y+Condiciones+Wingudata.pdf" className="text-dark-purple">Términos y condiciones</a>
        </div>
        {
          props.errorMessage && (
            <p className="text-red-500 text-xs italic">
             { props.errorMessage }
            </p>
          )
        }
      </div>
      <div className="flex items-center justify-center">
        <button
          className="bg-purple-wingu text-white w-full py-2 px-4 rounded-full focus:outline-none focus:shadow-outline"
          type="submit"
        >
          { props.loading 
            ? <Loader />
            : <span>Ingresar</span>
          }
        </button>
      </div>
    </form>
  )
}

export default LoginForm
