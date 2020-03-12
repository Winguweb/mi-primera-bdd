import React, { useState, useEffect } from 'react'
import { Pie } from 'react-chartjs-2'
import _ from 'lodash'

import EmptyState from '../assets/EmptyState'
import SvgPie from '../assets/Pie'

const Opportunities = ({ loading, error, data }) => {
  const [isEmpty, setIsEmpty] = useState(false)
  let formatted = {}

  const options = {
    legend: {
      position: 'right'
    }
  }

  if (data) { 
    const opp = [...data.opportunities]

    if (_.isEmpty(opp)) {
      setIsEmpty(true)
    } else {
      const grouped = _.countBy(opp, (op => op.state.Name))
      formatted = {
        labels: Object.keys(grouped),
        datasets: [{
          data: Object.values(grouped),
          backgroundColor: [
            '#2680FF',
            '#FFBD2E',
            '#00DE89',
            '#ff7214'
          ],
          hoverBackgroundColor: [
            '#2680FF',
            '#FFBD2E',
            '#00DE89',
            '#ff7214'
          ]
        }]
      }
    }         
  }

  if (loading) return <p>Loading...</p>

  return (
    <div>
      <h2 className="text-lg mb-4">Oportunidades por estado</h2>
      { isEmpty
        ? ( <EmptyState>
            <SvgPie />
          </EmptyState> )
        : <Pie data={formatted} options={options} />
      }
    </div>
  )
}

export default Opportunities