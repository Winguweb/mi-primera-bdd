import React, { useEffect } from 'react'
import _ from 'lodash'

const AccountsWithOportunities = ({ data, error, loading }) => {
  let counter = false

  if (loading) return <p>Loading...</p>

  if (data) {
    const number = _([...data.accounts])
      .filter((account) => account.opportunities.length)
      .size()

    counter = number
  }

  return (
    <div className="flex flex-col justify-between">
      <h2 className="text-lg mb-4">Cuentas con oportunidades</h2>
      <h3 className="text-blue-wingu text-center text-6xl">{counter}</h3>
      { (error || !counter) && 
        <span className="text-center">Las métricas aún no están disponibles</span>
      }
    </div>
  )
}

export default AccountsWithOportunities