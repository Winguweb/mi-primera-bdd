import { Component } from 'react'
import { Mutation } from 'react-apollo'
import Router from 'next/router'
import { getIdFromLocalCookie } from '../../lib/auth'
import Alert from '../Alert'
import Loader from '../Loader'
import { parse } from 'graphql'

class Form extends Component {
  state = {
    name: this.props.data.opportunity ? this.props.data.opportunity.name : '',
    date: this.props.data.opportunity ? this.props.data.opportunity.date : null,
    ammount: this.props.data.opportunity ? this.props.data.opportunity.ammount : 0,
    currency: this.props.data.opportunity ? this.props.data.opportunity.currency : 'pesos',
    observations: this.props.data.opportunity ? this.props.data.opportunity.observations : '',
    state: (this.props.data.opportunity && this.props.data.opportunity.state) ? this.props.data.opportunity.state.id : this.props.data.states[0].id,
    opportunity_type: (this.props.data.opportunity &&  this.props.data.opportunity.opportunity_type) ? this.props.data.opportunity.opportunity_type.id : this.props.data.opportunityTypes[0].id,
    account: (this.props.data.opportunity && this.props.data.opportunity.account) ? this.props.data.opportunity.account.id : this.props.data.accounts[0].id
  }

  handleChange = (event) => {
    const { name, value } = event.target

    this.setState({ 
      [name]: value
    })
  }

  handleAmmount = (event) => {
    const { value } = event.target

    this.setState({
      ammount: parseInt(value)
    })
  }

  render() {
    const { opportunityTypes, states, accounts } = this.props.data

    const {
      name,
      date,
      ammount,
      currency,
      observations,
      state,
      opportunity_type,
      account
    } = this.state

    return (
      <Mutation mutation={this.props.mutation} 
        variables={{ 
          ammount: parseFloat(ammount),
          ...this.state, 
          organization: getIdFromLocalCookie()
        }}
        onCompleted={() => Router.push({ pathname: '/opportunities', query: { success: 'true'} })} >
          { (opportunityMutation, { loading, error }) => (
            <>
              { error && 
                <Alert mode="error">No se pudo guardar la oportunidad. Por favor intente nuevamente.</Alert>
              }
              <form>
                <div className="bg-white px-4 pt-6 pb-8 mb-4 flex flex-col my-2">
                  <div className="-mx-3 md:flex mb-6">
                    <div className="md:w-1/2 px-3 mb-6 md:mb-0">
                      <label className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" htmlFor="name">
                        Nombre de la oportunidad
                      </label>
                      <input
                        className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded py-3 px-4 mb-3"
                        name="name" type="text" placeholder="Wingu"
                        value={name} onChange={this.handleChange} />
                      {
                        //<p className="text-red text-xs italic">Please fill out this field.</p>
                      }
                    </div>
                    <div className="md:w-1/2 px-3">
                      <label className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" htmlFor="opportunity_type">
                        Tipo
                      </label>
                      <div className="relative">
                        <select
                        className="block appearance-none w-full bg-grey-lighter border border-grey-lighter text-grey-darker py-3 px-4 pr-8 rounded"
                        name="opportunity_type"
                        value={opportunity_type}
                        onChange={this.handleChange}>
                          { opportunityTypes && opportunityTypes.map((opp, i) => (
                            <option key={i} value={opp.id}>{ opp.Name }</option>
                          ))}
                        </select>
                        <div className="pointer-events-none absolute right-0 top-0 mt-4 flex items-center px-2 text-grey-darker">
                          <svg className="h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="-mx-3 md:flex mb-6">
                  <div className="md:w-1/2 px-3">
                      <label className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" htmlFor="state">
                        Estado
                      </label>
                      <div className="relative">
                        <select
                          className="block appearance-none w-full bg-grey-lighter border border-grey-lighter text-grey-darker py-3 px-4 pr-8 rounded"
                          name="state"
                          value={state}
                          onChange={this.handleChange}>
                          { states && states.map((st, i) =>  (
                            <option value={st.id} key={i}>{st.Name}</option>
                          ))}
                        </select>
                        <div className="pointer-events-none absolute right-0 top-0 mt-4 flex items-center px-2 text-grey-darker">
                          <svg className="h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                        </div>
                      </div>
                    </div>
                    <div className="md:w-1/2 px-3">
                      <label className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" htmlFor="account">
                        Cuenta <span className="ml-2 normal-case text-xs italic font-light">Se debe dar de alta antes</span>
                      </label>
                      <div className="relative">
                        <select
                          className="block appearance-none w-full bg-grey-lighter border border-grey-lighter text-grey-darker py-3 px-4 pr-8 rounded"
                          name="account"
                          value={account}
                          onChange={this.handleChange}>
                          { accounts && accounts.map((acc, i) =>{ 
                            console.log(acc.id)
                            return <option value={acc.id} key={i}>{acc.name}</option>
                          })}
                        </select>
                        <div className="pointer-events-none absolute right-0 top-0 mt-4 flex items-center px-2 text-grey-darker">
                          <svg className="h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="-mx-3 md:flex mb-6">
                    <div className="md:w-1/2 px-3 mb-6 md:mb-0">
                      <label className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" htmlFor="date">
                        Fecha
                      </label>
                      <input
                        className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4"
                        name="date"
                        type="date"
                        value={date}
                        onChange={this.handleChange}/>
                    </div>
                  </div>
                  <div className="-mx-3 md:flex mb-6">
                    <div className="md:w-1/2 px-3 mb-6 md:mb-0">
                      <label className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" htmlFor="ammount">
                        Monto
                      </label>
                      <input
                        className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4"
                        name="ammount"
                        type="number"
                        placeholder={100}
                        value={ammount}
                        onChange={this.handleAmmount} />
                    </div>
                    <div className="md:w-1/2 px-3 mb-6 md:mb-0">
                      <label className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" htmlFor="currency">
                        Moneda
                      </label>
                      <div className="relative">
                        <select
                          className="block appearance-none w-full bg-grey-lighter border border-grey-lighter text-grey-darker py-3 px-4 pr-8 rounded"
                          name="currency"
                          value={currency}
                          onChange={this.handleChange}>
                          <option value="pesos">Pesos argentinos</option>
                          <option value="dolar">Dólar estadounidense</option>
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
                            console.log(this.state)
                            opportunityMutation()
                          }}>
                          { loading 
                            ? <Loader />
                            : <span>Guardar oportunidad</span>
                          } 
                        </button>
                      
                  </div>
                </div>
              </form>
            </>
          )
        }
      </Mutation>
    )
  }
}

export default Form