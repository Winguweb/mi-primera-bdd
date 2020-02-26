import React, { useState, useEffect } from 'react'
import { Bar } from 'react-chartjs-2';
import _ from 'lodash'
import EmptyState from '../assets/EmptyState'
import Bar2 from '../assets/Bar2'


const Contacts = () => {
  const [data, setData ] = useState(null)
  const [isLoading, setIsLoading] = useState(true)
  const [isEmpty, setIsEmpty] = useState(false)

  useEffect(() => {
    const token = sessionStorage.getItem('jwtToken')
    fetch(`${strapi.backendURL}/accounts`, {
      headers: {
        Authorization: `Bearer ${JSON.parse(token)}`
      }
    })
      .then((res) => res.json())
      .then((res) => {
        if (_.isEmpty(res)) {
          setIsEmpty(true)
        } else {
          const grouped = _.countBy(res, (op => op.account_type.Name))

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
        }
        
        setIsLoading(false)
      })
  }, [])

  if (isLoading) return <p>Loading...</p>



  return (
    <div>
      <h2>Cuentas por tipo</h2>
      { isEmpty
        ? ( <EmptyState>
            <Bar2 />
          </EmptyState> )
        : <Bar data={data} />
      }
    </div>
  )
}

export default Contacts