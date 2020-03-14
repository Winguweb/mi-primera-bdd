const Form = () => {
  return (
    <div className="bg-white px-4 pt-6 pb-8 mb-4 flex flex-col my-2">
      <div className="-mx-3 md:flex mb-6">
        <div className="md:w-1/2 px-3 mb-6 md:mb-0">
          <label className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" for="grid-first-name">
            Nombre de la cuenta
          </label>
          <input className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded py-3 px-4 mb-3" id="grid-first-name" type="text" placeholder="Wingu" />
          {
            //<p className="text-red text-xs italic">Please fill out this field.</p>
          }
        </div>
        <div className="md:w-1/2 px-3">
          <label className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" for="grid-state">
            Tipo
          </label>
          <div className="relative">
            <select className="block appearance-none w-full bg-grey-lighter border border-grey-lighter text-grey-darker py-3 px-4 pr-8 rounded" id="grid-state">
              <option>Tipo 1</option>
              <option>Tipo 2</option>
              <option>Tipo 3</option>
            </select>
            <div className="pointer-events-none absolute right-0 top-0 mt-4 flex items-center px-2 text-grey-darker">
              <svg className="h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
            </div>
          </div>
        </div>
      </div>
      <div className="-mx-3 md:flex mb-6">
        <div className="md:w-1/2 px-3 mb-6 md:mb-0">
          <label className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" for="grid-city">
            Email
          </label>
          <input className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4" id="grid-city" type="email" placeholder="wingu@wingu.org" />
        </div>
        <div className="md:w-1/2 px-3 mb-6 md:mb-0">
          <label className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" for="grid-city">
            Email alternativo
          </label>
          <input className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4" id="grid-city" type="email" placeholder="wingu@wingu.org" />
        </div>
      </div>
      <div className="-mx-3 md:flex mb-6">
        <div className="md:w-1/2 px-3 mb-6 md:mb-0">
          <label className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" for="grid-city">
            Dirección
          </label>
          <input className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4" id="grid-city" type="text" placeholder="Thames 1024" />
        </div>
      </div>
      <div className="-mx-3 md:flex mb-6">
        <div className="md:w-1/2 px-3 mb-6 md:mb-0">
          <label className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" for="grid-city">
            Teléfono
          </label>
          <input className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4" id="grid-city" type="email" placeholder="123456789" />
        </div>
        <div className="md:w-1/2 px-3 mb-6 md:mb-0">
          <label className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" for="grid-city">
            Teléfono alternativo
          </label>
          <input className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4" id="grid-city" type="email" placeholder="123456789" />
        </div>
      </div>
      <div className="-mx-3 md:flex mb-6">
        <div className="md:w-1/2 px-3 mb-6 md:mb-0">
          <label className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" for="grid-city">
            Sitio web
          </label>
          <input className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4" id="grid-city" type="text" placeholder="https://winguweb.org" />
        </div>
      </div>
      <div className="-mx-3 md:flex mb-2">
        <div className="md:w-full px-3 mb-6 md:mb-0">
          <label className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" for="grid-city">
            Observaciones
          </label>
          <textarea className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4" id="grid-city" type="text" placeholder="Observaciones..." />
        </div>
      </div>
    </div>
  )
}

export default Form