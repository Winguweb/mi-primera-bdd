import React, { useState, useEffect } from 'react'
import { Doughnut } from 'react-chartjs-2'
import _ from 'lodash'

import EmptyState from '../assets/EmptyState'
import SvgPie from '../assets/pie-chart.svg'

const Opportunities = ({ loading, error, data }) => {
  let formatted = {}

  const options = {
    legend: {
      position: 'right'
    }
  }

  if (data) { 
    const opp = [...data.opportunities]
    const grouped = _.countBy(opp, (op => op.state && op.state.name))
    formatted = {
      labels: Object.keys(grouped),
      datasets: [{
        data: Object.values(grouped),
        backgroundColor: [
          '#58D0FF',
          '#8479FF',
          '#FFC935',
          '#FF6161',
          '#BF5BFF',
        ],
        hoverBackgroundColor: [
          '#58D0FF',
          '#8479FF',
          '#FFC935',
          '#FF6161',
          '#BF5BFF',
        ]
      }]
    }         
  }

  if (loading) return <p>Loading...</p>

  return (
    <div>
      <h2 className="text-lg mb-4 font-semibold">Oportunidades por estado</h2>
      { data && data.opportunities && !!data.opportunities.length
        ? <Doughnut data={formatted} options={options} />
        : ( <EmptyState>
          <SvgPie />
        </EmptyState> )
      }
    </div>
  )
}

export default Opportunities