import React, { useState, useEffect } from 'react'
import { Bar } from 'react-chartjs-2';
import _ from 'lodash'
import EmptyState from '../assets/EmptyState'
import BarSvg from '../assets/Bar'

const Contacts = ({ loading, error, data }) => {
  let formatted = null

  const [isEmpty, setIsEmpty] = useState(false)

  const options = {
    legend: {
      display: false
    }
  }

  if (loading) return <p>Loading...</p>

  if (data) {
    const contacts = [...data.contacts].filter((contact) => contact.contact_type)
    if (!contacts) {
      setIsEmpty(true)
    } else {
      const grouped = _.countBy(contacts, (contact => contact.contact_type.Name))
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

  return (
    <div>
    <h2 className="text-lg mb-4 font-bold">Contacto por tipo</h2>
      { isEmpty ? (
        <EmptyState>
          <BarSvg />
        </EmptyState>
      )
      : <Bar data={formatted} options={options} />
      }
    </div>
  )
}

export default Contacts