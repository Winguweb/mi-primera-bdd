import { useState } from 'react'
import { useMutation } from '@apollo/react-hooks'
import Cookies from 'js-cookie'
import { ACCEPT_TERMS } from '../../graphql/user/mutation/acceptTerms'

const Modal = ({ dismissModal }) => {
  const [accepted, toggleAccepted] = useState(false)
 
  const [acceptTerms, { data }] = useMutation(ACCEPT_TERMS, {
    onCompleted: () => dismissModal()
  })
  
  const id = Cookies.get("id")


  return (
    <div className="modal fixed w-full h-screen top-0 bottom-0 left-0 right-0 flex items-center justify-center z-20">
      <div className="modal-overlay bg-gray-500 opacity-50 w-full h-full absolute pointer-events-none"></div>
      <div className="modal-body p-4 text-gray-900 bg-white rounded-lg text-left font-medium shadow-lg opacity-100 z-50 w-2/5">
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-bold">Términos y condiciones</h2>
          <button
            className="button h-8 w-8 text-white bg-gray-500 flex items-center justify-center font-bold rounded-full"
            onClick={dismissModal}>
            <span className="text-lg">
              &#215;
            </span>
          </button>
        </div>
        <div className="w-full">
          <p className="my-4 text-sm">Para continuar, deberás aceptar los términos y condiciones listados debajo:</p>
          <iframe frameBorder="0" width="100%" className="border-none h-64 mb-4" src=""></iframe>
        </div>
        <div className="my-4 flex justify-between items-center px-2">
          <button className="mt-3 inline-flex items-center cursor-pointer" onClick={() => toggleAccepted(!accepted)}>
            <span className="relative">
              <span className="block w-10 h-6 bg-gray-400 rounded-full shadow-inner"></span>
              <span className={accepted ? 'absolute block w-4 h-4 mt-1 ml-1 rounded-full shadow inset-y-0 left-0 focus-within:shadow-outline transition-transform duration-300 ease-in-out bg-blue-wingu transform translate-x-full' : 'absolute block w-4 h-4 mt-1 ml-1 bg-white rounded-full shadow inset-y-0 left-0 focus-within:shadow-outline transition-transform duration-300 ease-in-out'}>
                <input id="unchecked" type="checkbox" className="absolute opacity-0 w-0 h-0" />
              </span>
            </span>
            <span className="ml-3 text-sm">
              Acepto términos y condiciones
            </span>
          </button>
          <button
            onClick={(e) => {
              e.preventDefault()
              acceptTerms({
                variables: {
                  id: id,
                  acceptedTerms: accepted
                }
              })
            }}
            
            className="bg-blue-wingu text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
            Aceptar
          </button>
        </div>
      </div>
    </div>
  )
}

export default Modal