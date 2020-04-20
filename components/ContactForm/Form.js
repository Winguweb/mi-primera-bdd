import { Component } from 'react'
import { Mutation } from 'react-apollo'
import Router from 'next/router'
import { CREATE_CONTACT_AND_ACCOUNT } from '../../graphql/contact/mutation/createContactAndAccount'
import { getIdFromLocalCookie } from '../../lib/auth'
import Alert from '../Alert'
import Loader from '../Loader'

class Form extends Component {
  state = {
    name: this.props.data.contact ?  this.props.data.contact.name : '',
    lastname: this.props.data.contact ?  this.props.data.contact.lastname : '',
    charge: this.props.data.contact ? this.props.data.contact.charge : '',
    occupation: this.props.data.contact ? this.props.data.contact.occupation : '',
    birth_date: this.props.data.contact ? this.props.data.contact.birth_date : null,
    email: this.props.data.contact ? this.props.data.contact.email : '',
    alt_email: this.props.data.contact ? this.props.data.contact.alt_email : '',
    phone: this.props.data.contact ? this.props.data.contact.phone : 123456789,
    cellphone: this.props.data.contact ? this.props.data.contact.cellphone : 123456789,
    subscribed: this.props.data.contact ? this.props.data.contact.subscribed : false,
    observations: this.props.data.contact ? this.props.data.contact.observations : '',
    volunteer: this.props.data.contact ? this.props.data.contact.volunteer : false,
    account: (this.props.data.contact && this.props.data.contact.account) ? this.props.data.contact.account.id : null,
    origin: (this.props.data.contact  && this.props.data.contact.origin) ? this.props.data.contact.origin.id : null,
    contact_type: (this.props.data.contact && this.props.data.contact.contact_type) ? this.props.data.contact.contact_type.id : null,
    gender: this.props.data.contact ? this.props.data.contact.gender : 'femenino',
    identification: this.props.data.contact ? this.props.data.contact.identification : 123456789
  }

  toggleIsVolunteer = (e) => {
    e.preventDefault()
    this.setState({volunteer: !this.state.volunteer})
  }

  toggleIsSubscribed = (e) => {
    e.preventDefault()
    this.setState({subscribed: !this.state.subscribed})
  }

  handleChange = (event) => {
    const { name, value } = event.target
    console.log(name, value)

    this.setState({ 
      [name]: value
    })
  }

  handleIdentification = (event) => {
    const { value } = event.target
    this.setState({ 
      identification: parseInt(value)
    })
  }

  
  render() {
    const { 
      name,
      lastname,
      charge,
      occupation,
      birth_date,
      email,
      alt_email,
      phone,
      cellphone, 
      subscribed,
      observations,
      volunteer,
      account,
      origin,
      contact_type,
      gender,
      identification
    } = this.state

    const {
      origins,
      contactTypes,
      accounts
    } = this.props.data
   
    return (
      <Mutation
        mutation={(this.props.mode === 'create' && account === 'new') ? CREATE_CONTACT_AND_ACCOUNT : this.props.mutation }
        variables={{
          ...this.state,
          organization: getIdFromLocalCookie() }}
        onCompleted={() => Router.push({ pathname: '/contacts', query: { success: 'true'} })}>
        {( contactMutation, { loading, error }) => (
        <>
          {
            error && 
            <Alert mode="error">No se pudo guardar el contacto. Por favor intente nuevamente.</Alert>
          }
          <form>
            <div className="bg-white px-4 pt-6 pb-8 mb-4 flex flex-col my-2">
              <div className="-mx-3 md:flex mb-6">
                <div className="md:w-1/3 px-3 mb-6 md:mb-0">
                  <label className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" htmlFor="name">
                    Nombre
                  </label>
                  <input 
                    className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded py-3 px-4 mb-3"
                    type="text"
                    name="name"
                    value={name}
                    onChange={this.handleChange}
                    placeholder="Nombre"
                  />
                </div>
                <div className="md:w-1/3 px-3 mb-6 md:mb-0">
                  <label className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" htmlFor="lastname">
                    Apellido
                  </label>
                  <input 
                    className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded py-3 px-4 mb-3"  
                    type="text" 
                    name="lastname"
                    value={lastname}
                    onChange={this.handleChange}
                    placeholder="Apellido" />
                </div>
                <div className="md:w-1/3 px-3">
                  <label className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" htmlFor="gender">
                    Género
                  </label>
                  <div className="relative">
                    <select
                      className="block appearance-none w-full bg-grey-lighter border border-grey-lighter text-grey-darker py-3 px-4 pr-8 rounded"
                      name="gender"
                      value={gender}
                      onChange={this.handleChange}>
                      <option value="femenino">Femenino</option>
                      <option value="masculino">Masculino</option>
                      <option value="no_binario">No binario</option>
                      <option value="prefiero_no_decirlo">Prefiero no decirlo</option>
                    </select>
                    <div className="pointer-events-none absolute right-0 top-0 mt-4 flex items-center px-2 text-grey-darker">
                      <svg className="h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                    </div>
                  </div>
                </div>
              </div>
              <div className="-mx-3 md:flex mb-6">
                <div className="md:w-1/3 px-3 mb-6 md:mb-0">
                  <label className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" htmlFor="charge">
                    Cargo
                  </label>
                  <input
                    className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded py-3 px-4 mb-3"
                    type="text"
                    name="charge"
                    value={charge}
                    onChange={this.handleChange}
                    placeholder="Cargo" />
                </div>
                <div className="md:w-1/3 px-3 mb-6 md:mb-0">
                  <label className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" htmlFor="identification">
                    Documento
                  </label>
                  <input
                    className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded py-3 px-4 mb-3"
                    name="identification"
                    type="number"
                    value={identification}
                    onChange={this.handleIdentification} />
                </div>
                <div className="md:w-1/3 px-3 mb-6 md:mb-0">
                  <label className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" htmlFor="birth-date">
                    Fecha de nacimiento
                  </label>
                  <input
                    className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4"
                    type="date"
                    value={birth_date}
                    name="birth_date"
                    onChange={this.handleChange} />
                </div>
              </div>
              <div className="-mx-3 md:flex mb-6">
                <div className="md:w-1/3 px-3 mb-6 md:mb-0">
                  <label className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" htmlFor="occupation">
                    Ocupación
                  </label>
                  <input
                    className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded py-3 px-4 mb-3"
                    name="occupation"
                    type="text"
                    value={occupation}
                    onChange={this.handleChange}
                    placeholder="Ocupación" />
                </div>
                <div className="md:w-1/3 px-3">
                  <label className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" htmlFor="account">
                    Cuenta <span className="ml-2 normal-case text-xs italic font-light">Se debe dar de alta antes</span>
                  </label>
                  <div className="relative">
                    <select 
                      className="block appearance-none w-full bg-grey-lighter border border-grey-lighter text-grey-darker py-3 px-4 pr-8 rounded"
                      name="account"
                      value={account}
                      onChange={this.handleChange}>
                      <option value='new'>Nueva cuenta</option>
                      {accounts && accounts.map((acc, i) => (
                        <option value={acc.id} key={i}>{acc.name}</option>
                      ))}
                    </select>
                    <div className="pointer-events-none absolute right-0 top-0 mt-4 flex items-center px-2 text-grey-darker">
                      <svg className="h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                    </div>
                  </div>
                </div>
                <div className="md:w-1/3 px-3">
                  <label className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" htmlFor="volunteer">
                    Perfil de voluntariado
                  </label>
                  <button className="mt-3 inline-flex items-center cursor-pointer" onClick={this.toggleIsVolunteer}>
                    <span className="relative">
                      <span className="block w-10 h-6 bg-gray-400 rounded-full shadow-inner"></span>
                      <span className={volunteer ? 'absolute block w-4 h-4 mt-1 ml-1 rounded-full shadow inset-y-0 left-0 focus-within:shadow-outline transition-transform duration-300 ease-in-out bg-blue-wingu transform translate-x-full' : 'absolute block w-4 h-4 mt-1 ml-1 bg-white rounded-full shadow inset-y-0 left-0 focus-within:shadow-outline transition-transform duration-300 ease-in-out'}>
                        <input id="unchecked" type="checkbox" className="absolute opacity-0 w-0 h-0" />
                      </span>
                    </span>
                    <span className="ml-3 text-sm">
                      { volunteer ? 'Sí' : 'No'}
                    </span>
                  </button>
                </div>
              </div>
              { volunteer &&
                <>
                  <div className="-mx-3 md:flex mb-6 px-6">
                    <div className="w-full border-b border-indigo-200"></div>
                  </div>
                  <div className="-mx-3 md:flex mb-6">
                    <div className="md:w-1/3 px-3 mb-6 md:mb-0">
                      <label className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" htmlFor="grid-first-name">
                        Estado
                      </label>
                      <input className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded py-3 px-4 mb-3" id="grid-first-name" type="text" placeholder="Juan" />
                    </div>
                    <div className="md:w-1/3 px-3 mb-6 md:mb-0">
                      <label className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" htmlFor="grid-first-name">
                        Turno
                      </label>
                      <input className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded py-3 px-4 mb-3" id="grid-first-name" type="text" placeholder="Juan" />
                    </div>
                    <div className="md:w-1/3 px-3 mb-6 md:mb-0">
                      <label className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" htmlFor="grid-first-name">
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
                  <label className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" htmlFor="phone">
                    Teléfono
                  </label>
                  <input className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded py-3 px-4 mb-3"
                    name="phone" type="number"
                    value={phone} onChange={this.handleChange} />
                </div>
                <div className="md:w-1/3 px-3 mb-6 md:mb-0">
                  <label className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" htmlFor="cellphone">
                    Móvil
                  </label>
                  <input className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded py-3 px-4 mb-3"
                    name="cellphone" type="number"
                    value={cellphone} onChange={this.handleChange} />
                </div>
                
              </div>
              <div className="-mx-3 md:flex mb-6">
                <div className="md:w-1/3 px-3 mb-6 md:mb-0">
                  <label className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" htmlFor="email">
                    Email
                  </label>
                  <input
                    className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded py-3 px-4 mb-3" 
                    type="text" 
                    name="email"
                    value={email}
                    onChange={this.handleChange}
                    placeholder="Email" />
                </div>
                <div className="md:w-1/3 px-3 mb-6 md:mb-0">
                  <label className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" htmlFor="alt_email">
                    Email alternativo
                  </label>
                  <input
                    className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded py-3 px-4 mb-3"
                    type="text"
                    name="alt_email"
                    value={alt_email}
                    onChange={this.handleChange}
                    placeholder="Email alternativo" />
                </div>
              </div>
              <div className="-mx-3 md:flex mb-6">
                <div className="md:w-1/3 px-3">
                  <label className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" htmlFor="grid-state">
                    Dirección <span className="ml-2 normal-case text-xs italic font-light">Calle y numeración</span>
                  </label>
                  <input placeholder="Dirección" className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded py-3 px-4 mb-3" id="grid-first-name" type="text" />
                </div>
                <div className="md:w-1/3 px-3">
                  <label className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" htmlFor="grid-state">
                    Ciudad
                  </label>
                  <input className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded py-3 px-4 mb-3" id="grid-first-name" type="text" placeholder="Ciudad" />
                </div>
                <div className="md:w-1/3 px-3">
                  <label className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" htmlFor="grid-state">
                    Código postal
                  </label>
                  <input className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded py-3 px-4 mb-3" id="grid-first-name" type="text" placeholder="Código postal" />
                </div>
              </div>
              <div className="-mx-3 md:flex mb-6">
                <div className="md:w-1/3 px-3">
                  <label className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" htmlFor="grid-state">
                    Estado o provincia
                  </label>
                  <input className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded py-3 px-4 mb-3" id="grid-first-name" type="text" placeholder="Estado o provincia" />
                </div>
                <div className="md:w-1/3 px-3">
                  <label className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" htmlFor="grid-state">
                    País
                  </label>
                  <input className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded py-3 px-4 mb-3" id="grid-first-name" type="text" placeholder="País" />
                </div>
              </div>
              <div className="-mx-3 md:flex mb-6">
                <div className="md:w-1/3 px-3">
                  <label className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" htmlFor="origin">
                    Origen
                  </label>
                  <div className="relative">
                    <select
                      className="block appearance-none w-full bg-grey-lighter border border-grey-lighter text-grey-darker py-3 px-4 pr-8 rounded"
                      name="origin"
                      value={origin}
                      onChange={this.handleChange}>
                      { origins && origins.map((or, i) => (
                        <option value={or.id} key={i}>{or.name}</option>
                      ))}
                    </select>
                    <div className="pointer-events-none absolute right-0 top-0 mt-4 flex items-center px-2 text-grey-darker">
                      <svg className="h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                    </div>
                  </div>
                </div>
                <div className="md:w-1/3 px-3">
                  <label className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" htmlFor="contact_type">
                    Tipo
                  </label>
                  <div className="relative">
                    <select
                      className="block appearance-none w-full bg-grey-lighter border border-grey-lighter text-grey-darker py-3 px-4 pr-8 rounded"
                      name="contact_type"
                      value={contact_type}
                      onChange={this.handleChange}
                      >
                      <option value={null}>Elegir un tipo</option>
                      { contactTypes && contactTypes.map((typ, i) => (
                        <option value={typ.id} key={i}>{typ.name}</option>
                      ))}
                    </select>
                    <div className="pointer-events-none absolute right-0 top-0 mt-4 flex items-center px-2 text-grey-darker">
                      <svg className="h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                    </div>
                  </div>
                </div>
              </div>
              <div className="-mx-3 md:flex mb-2">
                <div className="md:w-full px-3 mb-6 md:mb-0">
                  <label className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" htmlFor="observations">
                    Observaciones
                  </label>
                  <textarea
                    className="h-32 appearance-none block w-2/3 bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4 resize-none" 
                    name="observations"
                    type="text"
                    value={observations}
                    onChange={this.handleChange}
                    placeholder="Observaciones" />
                </div>
              </div>
              <div className="-mx-3 md:flex mb-2">
                <div className="md:w-full px-3 mb-6 md:mb-0">
                  <label className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" htmlFor="subscribed">
                  <button className="mt-3 inline-flex items-center cursor-pointer" onClick={this.toggleIsSubscribed}>
                    <span className="relative">
                      <span className="block w-10 h-6 bg-gray-400 rounded-full shadow-inner"></span>
                      <span className={subscribed ? 'absolute block w-4 h-4 mt-1 ml-1 rounded-full shadow inset-y-0 left-0 focus-within:shadow-outline transition-transform duration-300 ease-in-out bg-blue-wingu transform translate-x-full' : 'absolute block w-4 h-4 mt-1 ml-1 bg-white rounded-full shadow inset-y-0 left-0 focus-within:shadow-outline transition-transform duration-300 ease-in-out'}>
                        <input id="unchecked" type="checkbox" className="absolute opacity-0 w-0 h-0" />
                      </span>
                    </span>
                    <span className="ml-3 text-sm">
                      Recibir novedades
                    </span>
                  </button>
                  </label>
                </div>  
              </div>
              <div className="-mx-3 md:flex mb-2 md:justify-center">
                <button
                  className="button text-white bg-blue-wingu flex items-center justify-center p-4 font-bold rounded"
                  onClick={(e) => {
                    e.preventDefault()
                    contactMutation()
                  }}>
                  { loading 
                    ? <Loader />
                    : <span>Guardar contacto</span>
                  } 
                </button>      
              </div>
            </div>
          </form>
        </>
      )}
    </Mutation>
    )
  }
}

export default Form