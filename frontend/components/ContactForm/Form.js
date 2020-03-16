import { useState } from 'react'

const Form = () => {
  const [isVolunteer, toggleIsVolunteer] = useState(false)

  return (
    <div className="bg-white px-4 pt-6 pb-8 mb-4 flex flex-col my-2">
      <div className="-mx-3 md:flex mb-6">
        <div className="md:w-1/3 px-3 mb-6 md:mb-0">
          <label className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" for="grid-first-name">
            Nombre
          </label>
          <input className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded py-3 px-4 mb-3" id="grid-first-name" type="text" placeholder="Juan" />
        </div>
        <div className="md:w-1/3 px-3 mb-6 md:mb-0">
          <label className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" for="grid-first-name">
            Apellido
          </label>
          <input className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded py-3 px-4 mb-3" id="grid-first-name" type="text" placeholder="Pérez" />
        </div>
        <div className="md:w-1/3 px-3">
          <label className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" for="grid-state">
            Género
          </label>
          <div className="relative">
            <select className="block appearance-none w-full bg-grey-lighter border border-grey-lighter text-grey-darker py-3 px-4 pr-8 rounded" id="grid-state">
              <option>Femenino</option>
              <option>Masculino</option>
              <option>No binario</option>
              <option>Prefiero no decirlo</option>
            </select>
            <div className="pointer-events-none absolute right-0 top-0 mt-4 flex items-center px-2 text-grey-darker">
              <svg className="h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
            </div>
          </div>
        </div>
      </div>
      <div className="-mx-3 md:flex mb-6">
        <div className="md:w-1/3 px-3 mb-6 md:mb-0">
          <label className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" for="grid-first-name">
            Cargo
          </label>
          <input className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded py-3 px-4 mb-3" id="grid-first-name" type="text" placeholder="Juan" />
        </div>
        <div className="md:w-1/3 px-3 mb-6 md:mb-0">
          <label className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" for="grid-first-name">
            Documento
          </label>
          <input className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded py-3 px-4 mb-3" id="grid-first-name" type="text" placeholder="Pérez" />
        </div>
        <div className="md:w-1/3 px-3 mb-6 md:mb-0">
          <label className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" for="grid-city">
            Fecha de nacimiento
          </label>
          <input className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4" id="grid-city" type="date" />
        </div>
      </div>
      <div className="-mx-3 md:flex mb-6">
        <div className="md:w-1/3 px-3 mb-6 md:mb-0">
          <label className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" for="grid-first-name">
            Ocupación
          </label>
          <input className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded py-3 px-4 mb-3" id="grid-first-name" type="text" placeholder="Juan" />
        </div>
        <div className="md:w-1/3 px-3">
          <label className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" for="grid-state">
            Cuenta <span className="ml-2 normal-case text-xs italic font-light">Se debe dar de alta antes</span>
          </label>
          <div className="relative">
            <select className="block appearance-none w-full bg-grey-lighter border border-grey-lighter text-grey-darker py-3 px-4 pr-8 rounded" id="grid-state">
              <option>Cuenta 1</option>
              <option>Cuenta 2</option>
              <option>Cuenta 3</option>
            </select>
            <div className="pointer-events-none absolute right-0 top-0 mt-4 flex items-center px-2 text-grey-darker">
              <svg className="h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
            </div>
          </div>
        </div>
        <div className="md:w-1/3 px-3">
          <label className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" for="grid-state">
            Perfil de voluntariado
          </label>
          <button className="mt-3 inline-flex items-center cursor-pointer" onClick={() => toggleIsVolunteer(!isVolunteer)}>
            <span className="relative">
              <span className="block w-10 h-6 bg-gray-400 rounded-full shadow-inner"></span>
              <span className={isVolunteer ? 'absolute block w-4 h-4 mt-1 ml-1 rounded-full shadow inset-y-0 left-0 focus-within:shadow-outline transition-transform duration-300 ease-in-out bg-blue-wingu transform translate-x-full' : 'absolute block w-4 h-4 mt-1 ml-1 bg-white rounded-full shadow inset-y-0 left-0 focus-within:shadow-outline transition-transform duration-300 ease-in-out'}>
                <input id="unchecked" type="checkbox" className="absolute opacity-0 w-0 h-0" />
              </span>
            </span>
            <span className="ml-3 text-sm">
              { isVolunteer ? 'Sí' : 'No'}
            </span>
          </button>
        </div>
      </div>
      { isVolunteer &&
        <>
          <div className="-mx-3 md:flex mb-6 px-6">
            <div className="w-full border-b border-indigo-200"></div>
          </div>
          <div className="-mx-3 md:flex mb-6">
            <div className="md:w-1/3 px-3 mb-6 md:mb-0">
              <label className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" for="grid-first-name">
                Estado
              </label>
              <input className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded py-3 px-4 mb-3" id="grid-first-name" type="text" placeholder="Juan" />
            </div>
            <div className="md:w-1/3 px-3 mb-6 md:mb-0">
              <label className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" for="grid-first-name">
                Turno
              </label>
              <input className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded py-3 px-4 mb-3" id="grid-first-name" type="text" placeholder="Juan" />
            </div>
            <div className="md:w-1/3 px-3 mb-6 md:mb-0">
              <label className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" for="grid-first-name">
                Habilidades
              </label>
              <input className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded py-3 px-4 mb-3" id="grid-first-name" type="text" placeholder="Juan" />
            </div>
          </div>
          <div className="-mx-3 md:flex mb-6 px-6">
            <div className="w-full  border-b border-indigo-200"></div>
          </div>
        </>
      }
      <div className="-mx-3 md:flex mb-6">
        <div className="md:w-1/3 px-3 mb-6 md:mb-0">
          <label className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" for="grid-first-name">
            Teléfono
          </label>
          <input className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded py-3 px-4 mb-3" id="grid-first-name" type="text" placeholder="Juan" />
        </div>
        <div className="md:w-1/3 px-3 mb-6 md:mb-0">
          <label className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" for="grid-first-name">
            Email
          </label>
          <input className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded py-3 px-4 mb-3" id="grid-first-name" type="text" placeholder="Juan" />
        </div>
        <div className="md:w-1/3 px-3 mb-6 md:mb-0">
          <label className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" for="grid-first-name">
            Email alternativo
          </label>
          <input className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded py-3 px-4 mb-3" id="grid-first-name" type="text" placeholder="Juan" />
        </div>
      </div>
      <div className="-mx-3 md:flex mb-6">
        <div className="md:w-1/3 px-3">
          <label className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" for="grid-state">
            Dirección <span className="ml-2 normal-case text-xs italic font-light">Calle y numeración</span>
          </label>
          <input className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded py-3 px-4 mb-3" id="grid-first-name" type="text" placeholder="Juan" />
        </div>
        <div className="md:w-1/3 px-3">
          <label className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" for="grid-state">
            Ciudad
          </label>
          <input className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded py-3 px-4 mb-3" id="grid-first-name" type="text" placeholder="Juan" />
        </div>
        <div className="md:w-1/3 px-3">
          <label className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" for="grid-state">
            Código postal
          </label>
          <input className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded py-3 px-4 mb-3" id="grid-first-name" type="text" placeholder="Juan" />
        </div>
      </div>
      <div className="-mx-3 md:flex mb-6">
        <div className="md:w-1/3 px-3">
          <label className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" for="grid-state">
            Estado o provincia
          </label>
          <input className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded py-3 px-4 mb-3" id="grid-first-name" type="text" placeholder="Juan" />
        </div>
        <div className="md:w-1/3 px-3">
          <label className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" for="grid-state">
            País
          </label>
          <input className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded py-3 px-4 mb-3" id="grid-first-name" type="text" placeholder="Juan" />
        </div>
      </div>
      <div className="-mx-3 md:flex mb-6">
        <div className="md:w-1/3 px-3">
          <label className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" for="grid-state">
            Origen
          </label>
          <input className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded py-3 px-4 mb-3" id="grid-first-name" type="text" placeholder="Juan" />
        </div>
        <div className="md:w-1/3 px-3">
          <label className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" for="grid-state">
            Tipo
          </label>
          <input className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded py-3 px-4 mb-3" id="grid-first-name" type="text" placeholder="Juan" />
        </div>
      </div>
      <div className="-mx-3 md:flex mb-2">
        <div className="md:w-full px-3 mb-6 md:mb-0">
          <label className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" for="grid-city">
            Observaciones
          </label>
          <textarea className="h-32 appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4 resize-none" id="grid-city" type="text" placeholder="Observaciones..." />
        </div>
      </div>
    </div>
  )
}

export default Form