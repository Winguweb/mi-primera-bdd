import { useState } from 'react'
import Router from 'next/router'

const LoginForm = props => {
  const [ email, setEmail ] = useState('')
  const [ password, setPassword ] = useState('')
  
  const handleSubmit = async (e) => {
    e.preventDefault()
    
    const result = props.submit({
      email, password
    })

    // if (result) {
    //   const token = result.data.login.jwt
    //   localStorage.setItem('token', token)
    //   Router.push('/dashboard')
    // }
  }


  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white shadow-md rounded px-8 pt-6 pb-8"
    >
      <div className="mb-4 w-full text-center">
        <span className="text-blue-wingu font-title text-2xl uppercase">
          Mi primera base de datos
        </span>
      </div>
      <div className="mb-4">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="email"
        >
          Correo electrónico
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="email"
          type="text"
          placeholder="ejemplo@winguweb.org"
          value={email}
          onChange={event => setEmail(event.target.value)}
        />
      </div>
      <div className="mb-6">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="password"
        >
          Contraseña
        </label>
        <input
          className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
          id="password"
          type="password"
          placeholder="******************"
          value={password}
          onChange={event => setPassword(event.target.value)}
        />
        { !password &&
          <p className="text-red-500 text-xs italic">
            Por favor, ingrese una contraseña.
          </p>
        }
      </div>
      <div className="flex items-center justify-center">
        <button
          className="bg-blue-wingu text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          type="submit"
        >
          Ingresar
        </button>
      </div>
    </form>
  )
}

export default LoginForm
