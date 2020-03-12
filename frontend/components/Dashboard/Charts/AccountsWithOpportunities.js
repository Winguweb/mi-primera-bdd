import React, { useState, useEffect } from 'react'
import _ from 'lodash'

// const Counter = styled.h3`
//   font-size: 8rem;
//   color: #2680FF;
//   text-align: center;
//   height: 150px;
//   margin: 5rem 0 0;
// `

const AccountsWithOportunities = () => {
  const [counter, setCounter] = useState(null)
  const [isLoading, setIsLoading] = useState(true)

  // useEffect(() => {
  //   fetch(`${strapi.backendURL}/accounts`)
  //     .then((res) => res.json())
  //     .then((res) => {
  //       const number = _(res)
  //       .filter((account) => account.opportunities.length)
  //       .size()

  //       setCounter(number)
  //       setIsLoading(false)
  //     })
  // }, [])

  if (isLoading) return <p>Loading...</p>

  return (
    <div className="flex flex-col justify-between">
      <h2>Cuentas con oportunidades</h2>
      <h3 className="text-blue-wingu text-center">{counter}</h3>
      { !counter && 
        <span className="text-center">Las métricas aún no están disponibles</span>
      }
    </div>
  )
}

export default AccountsWithOportunities