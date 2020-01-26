import React, { useState, useEffect } from 'react'
import { Pie } from 'react-chartjs-2';
import _ from 'lodash'

const Opportunities = () => {
  const [data, setData ] = useState(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    fetch('http://localhost:1337/opportunities')
      .then((res) => res.json())
      .then((res) => {
        const grouped = _.countBy(res, (op => op.state.Name))

        const formatted = {
          labels: Object.keys(grouped),
          datasets: [{
            data: Object.values(grouped),
            backgroundColor: [
            '#FF6384',
            '#36A2EB',
            '#FFCE56'
            ],
            hoverBackgroundColor: [
            '#FF6384',
            '#36A2EB',
            '#FFCE56'
            ]
          }]
        }

        setData(formatted)
        setIsLoading(false)
      })
  }, [])

  if (isLoading) return <p>Loading...</p>



  return (
    <div>
      <h2>Oportunidades por estado</h2>
      <Pie data={data} />
    </div>
  )
}

export default Opportunities