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