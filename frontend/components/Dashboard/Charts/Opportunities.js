import React, { useState, useEffect } from 'react'
import { Pie } from 'react-chartjs-2'
import _ from 'lodash'

import EmptyState from '../assets/EmptyState'
import SvgPie from '../assets/Pie'

const Opportunities = () => {
  const [data, setData ] = useState(null)
  const [isLoading, setIsLoading] = useState(true)
  const [isEmpty, setIsEmpty] = useState(true)

  const options = {
    legend: {
      position: 'right'
    }
  }

  // useEffect(() => {
  //   fetch(`${strapi.backendURL}/opportunities`)
  //     .then((res) => res.json())
  //     .then((res) => {
  //       if (_.isEmpty(res)) {
  //         setIsEmpty(true)
  //       } else {
  //         const grouped = _.countBy(res, (op => op.state.Name))
  //         const formatted = {
  //           labels: Object.keys(grouped),
  //           datasets: [{
  //             data: Object.values(grouped),
  //             backgroundColor: [
  //               '#2680FF',
  //               '#FFBD2E',
  //               '#00DE89',
  //               '#ff7214'
  //             ],
  //             hoverBackgroundColor: [
  //               '#2680FF',
  //               '#FFBD2E',
  //               '#00DE89',
  //               '#ff7214'
  //             ]
  //           }]
  //         }
  //         setData(formatted)
  //       }
  //         setIsLoading(false)        
  //     })
  // }, [])

  if (isLoading) return <p>Loading...</p>

  return (
    <div>
      <h2>Oportunidades por estado</h2>
      { isEmpty
        ? ( <EmptyState>
            <SvgPie />
          </EmptyState> )
        : <Pie data={data} options={options} />
      }
    </div>
  )
}

export default Opportunities