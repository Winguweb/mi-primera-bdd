import React, { useState, useEffect } from 'react'
import { Bar } from 'react-chartjs-2';
import _ from 'lodash'
import EmptyState from '../assets/EmptyState'
import BarSvg from '../assets/Bar'


const Accounts = ({ loading, error, data }) => {
  let formatted = null
  const [isEmpty, setIsEmpty] = useState(false)

  const options = {
    legend: {
      display: false
    }
  }

  if (loading) return <p>Loading...</p>

  if (data) {
    const accounts = [...data.accounts].filter((account) => account.account_type)
    const grouped = _.countBy(accounts, (account) => account.account_type.Name)
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


  return (
    <div>
      <h2 className="text-lg mb-4 font-bold">Cuentas por tipo</h2>
      { data.accounts && !!data.accounts.length
        ? <Bar data={formatted} options={options} />
        : <EmptyState>
            <BarSvg />
          </EmptyState>
      }
    </div>
  )
}

export default Accounts