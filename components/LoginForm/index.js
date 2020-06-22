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
      className=""
    >
      <div className="mb-4 w-full text-center">
        <Logo />
        <div>
          <span>Mi primera base de datos</span>
        </div>
      </div>
      <div className="mb-4">
        <label
          className="block text-gray-700 text-sm mb-2"
          htmlFor="email"
        >
          Correo electrónico
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-purple-wingu"
          id="email"
          type="text"
          placeholder="ejemplo@winguweb.org"
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
          className="block text-gray-700 text-sm mb-2"
          htmlFor="password"
        >
          Contraseña
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:border-purple-wingu"
          id="password"
          type="password"
          placeholder="******************"
          value={password}
          onChange={event => {
            if (props.errorMessage) {
              props.handleErrorMessage(null)
            }
            setPassword(event.target.value)
          }}
        />
        {/* { !password &&
          <p className="text-red-500 text-xs italic">
            Por favor, ingrese una contraseña.
          </p>
        } */}
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
