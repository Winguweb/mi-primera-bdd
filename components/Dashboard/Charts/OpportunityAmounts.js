import React, { useState } from 'react'
import { Polar } from 'react-chartjs-2'
import _ from 'lodash'

import EmptyState from '../assets/EmptyState'
import SvgPie from '../assets/Pie'

const Opportunities = ({ loading, error, data }) => {
  const [currency, handleCurrency] = useState('pesos')
  let formatted = {}

  const options = {
    legend: {
      position: 'right'
    }
  }

  if (data && data.opportunities) { 
    const opp = [...data.opportunities]
    let states = {}
    opp.forEach((op) => {
      if (!(op.state && states[op.state.name])) {
        states[op.state.name] = 0
      }
    })
    data.opportunities.filter((obj) => obj.currency === currency).forEach((opp) => states[opp.state.name] += opp.ammount)
    formatted = {
      labels: Object.keys(states),
      datasets: [{
        data: Object.values(states),
        backgroundColor: [
          'rgba(38, 128, 255, 0.6)',
          'rgba(255, 189, 46, 0.6)',
          'rgba(0, 222, 137, 0.6)',
          'rgba(255, 114, 20, 0.6)'
        ],
        hoverBackgroundColor: [
          'rgba(38, 128, 255, 0.9)',
          'rgba(255, 189, 46, 0.9)',
          'rgba(0, 222, 137, 0.9)',
          'rgba(255, 114, 20, 0.9)'
        ]
      }]
    }         
  }

  if (loading) return <p>Loading...</p>

  return (
    <div>
      {/* className={`block appearance-none w-full bg-grey-lighter border text-grey-darker py-3 px-4 pr-8 rounded ${changeRequired ? 'border-error-red' : 'border-grey-lighter'}`} */}
      <h2 className="text-lg mb-4 font-bold">
        {`Oportunidades por monto en `}
        <span className={`cursor-pointer ${currency === 'pesos' && 'text-green-wingu'}`} onClick={() => { handleCurrency('pesos') }}>pesos</span> {` / `} 
        <span className={`cursor-pointer ${currency === 'dolar' && 'text-green-wingu'}`} onClick={() => { handleCurrency('dolar') }}>dolares</span>
      </h2>
      { data && data.opportunities && !!data.opportunities.length
        ? <Polar data={formatted} options={options} />
        : ( <EmptyState>
          <SvgPie />
        </EmptyState> )
      }
    </div>
  )
}

export default Opportunities