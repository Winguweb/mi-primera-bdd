import { Component } from 'react'
import { Mutation } from 'react-apollo'
import Router from 'next/router'
import { getIdFromLocalCookie } from '../../lib/auth'
import Alert from '../Alert'
import Loader from '../Loader'

class Form extends Component {
  state = {
    name: this.props.data.account ? this.props.data.account.name : '',
    account_type: (this.props.data.account && this.props.data.account.account_type) ? this.props.data.account.account_type.id : null,
    email: this.props.data.account ? this.props.data.account.email : '',
    alternative_email: this.props.data.account ? this.props.data.account.alternative_email : '',
    phone: this.props.data.account ? this.props.data.account.phone : null,
    alt_phone: this.props.data.account ? this.props.data.account.alt_phone : null,
    web: this.props.data.account ? this.props.data.account.web : '',
    observations: this.props.data.account ? this.props.data.account.observations : '',
    address: this.props.data.account ? this.props.data.account.address : '',
    city: this.props.data.account ? this.props.data.account.city : '',
    zip_code: this.props.data.account ? this.props.data.account.zip_code : '',
    province: this.props.data.account ? this.props.data.account.province : '',
    country: this.props.data.account ? this.props.data.account.country : '',
  }

  handleChange = (event) => {
    const { name, value } = event.target
    this.setState({ 
      [name]: value
    })
  }

  render() {
    const { accountTypes } = this.props.data
    const {
      name,
      account_type, 
      email,
      alternative_email,
      phone,
      alt_phone,
      web,
      observations,
      address,
      city,
      zip_code,
      province,
      country
    } = this.state

    return (
      <Mutation mutation={this.props.mutation} variables={{
        ...this.state,
        organization: getIdFromLocalCookie(),
        id: this.props.data.account ? this.props.data.account.id : null
      }}
        
        onCompleted={() => Router.push({ pathname: '/accounts', query: { success: 'true'} })}>
        { (accountMutation, { loading, error }) => (
          <>
            {
              error && 
              <Alert mode="error">No se pudo guardar la cuenta. Por favor intente nuevamente.</Alert>
            }
            <form>
              <div className="bg-white px-4 pt-6 pb-8 mb-4 flex flex-col my-2">
              <div className="-mx-3 md:flex mb-6">
                <div className="md:w-1/2 px-3 mb-6 md:mb-0">
                  <label className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" htmlFor="name">
                    Nombre de la cuenta
                  </label>
                  <input
                    className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded py-3 px-4 mb-3"
                    name="name"
                    type="text"
                    placeholder="Nombre"
                    value={name}
                    onChange={this.handleChange} />
                  {
                    //<p className="text-red text-xs italic">Please fill out this field.</p>
                  }
                </div>
                <div className="md:w-1/2 px-3">
                  <label className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" htmlFor="account_type">
                    Tipo
                  </label>
                  <div className="relative">
                    <select
                      className="block appearance-none w-full bg-grey-lighter border border-grey-lighter text-grey-darker py-3 px-4 pr-8 rounded"
                      name="account_type"
                      value={account_type}
                      onChange={this.handleChange}
                      >
                      <option value={null}>Elegir una cuenta</option>
                      { accountTypes && accountTypes.map((type) => (
                        <option key={type.id} value={type.id}>{type.name}</option>
                      ))}
                    </select>
                    <div className="pointer-events-none absolute right-0 top-0 mt-4 flex items-center px-2 text-grey-darker">
                      <svg className="h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                    </div>
                  </div>
                </div>
              </div>
              <div className="-mx-3 md:flex mb-6">
                <div className="md:w-1/2 px-3 mb-6 md:mb-0">
                  <label className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" htmlFor="email">
                    Email
                  </label>
                  <input
                    className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4"
                    name="email"
                    type="email" 
                    placeholder="Email"
                    value={email}
                    onChange={this.handleChange} />
                </div>
                <div className="md:w-1/2 px-3 mb-6 md:mb-0">
                  <label className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" htmlFor="alternative-email">
                    Email alternativo
                  </label>
                  <input
                    className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4"
                    name="alternative_email"
                    type="email"
                    placeholder="Email alternativo"
                    value={alternative_email}
                    onChange={this.handleChange} />
                </div>
              </div>
              <div className="-mx-3 md:flex mb-6">
                <div className="md:w-1/3 px-3">
                  <label className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" htmlFor="address">
                    Dirección <span className="ml-2 normal-case text-xs italic font-light">Calle y numeración</span>
                  </label>
                  <input 
                    className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded py-3 px-4 mb-3"
                    type="text" 
                    name="address"
                    placeholder="Dirección"
                    value={address}
                    onChange={this.handleChange} />
                </div>
                <div className="md:w-1/3 px-3">
                  <label className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" htmlFor="city">
                    Ciudad
                  </label>
                  <input
                    className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded py-3 px-4 mb-3"
                    type="text" 
                    name="city"
                    placeholder="Ciudad" 
                    value={city}
                    onChange={this.handleChange} />
                </div>
                <div className="md:w-1/3 px-3">
                  <label className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" htmlFor="zip_code">
                    Código postal
                  </label>
                  <input
                    className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded py-3 px-4 mb-3"
                    type="text" 
                    name="zip_code"
                    placeholder="Código postal"
                    value={zip_code}
                    onChange={this.handleChange} />
                </div>
              </div>
              <div className="-mx-3 md:flex mb-6">
                <div className="md:w-1/2 px-3">
                  <label className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" htmlFor="province">
                    Estado o provincia
                  </label>
                  <input
                    className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded py-3 px-4 mb-3"
                    type="text" 
                    name="province"
                    placeholder="Estado o provincia"
                    value={province}
                    onChange={this.handleChange} />
                </div>
                <div className="md:w-1/2 px-3">
                  <label className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" htmlFor="country">
                    País
                  </label>
                  <input
                    className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded py-3 px-4 mb-3"
                    type="text" 
                    name="country"
                    placeholder="País"
                    value={country}
                    onChange={this.handleChange} />
                </div>
              </div>
              <div className="-mx-3 md:flex mb-6">
                <div className="md:w-1/2 px-3 mb-6 md:mb-0">
                  <label className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" htmlFor="phone">
                    Teléfono
                  </label>
                  <input
                    className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4"
                    name="phone"
                    type="number"
                    placeholder="123456789"
                    value={phone}
                    onChange={this.handleChange} />
                </div>
                <div className="md:w-1/2 px-3 mb-6 md:mb-0">
                  <label className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" htmlFor="grid-city">
                    Teléfono alternativo
                  </label>
                  <input
                    className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4"
                    type="number"
                    placeholder="123456789"
                    name="alt_phone"
                    value={alt_phone}
                    onChange={this.handleChange} />
                </div>
              </div>
              <div className="-mx-3 md:flex mb-6">
                <div className="md:w-1/2 px-3 mb-6 md:mb-0">
                  <label className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" htmlFor="web">
                    Sitio web
                  </label>
                  <input
                    className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4"
                    name="web"
                    type="text"
                    placeholder="Sitio web"
                    value={web}
                    onChange={this.handleChange} />
                </div>
              </div>
              <div className="-mx-3 md:flex mb-2">
                <div className="md:w-full px-3 mb-6 md:mb-0">
                  <label className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" htmlFor="observations">
                    Observaciones
                  </label>
                  <textarea
                    className="h-32 appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4 resize-none"
                    name="observations"
                    type="text"
                    placeholder="Observaciones..."
                    value={observations}
                    onChange={this.handleChange} />
                </div>
              </div>
              <div className="-mx-3 md:flex md:justify-center mb-2 mt-4">
    
                    <button
                      className="button text-white bg-blue-wingu flex items-center justify-center p-4 font-bold rounded"
                      onClick={(e) => {
                        e.preventDefault()
                        accountMutation()
                      }}>
                      { loading 
                        ? <Loader />
                        : <span>Guardar cuenta</span>
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