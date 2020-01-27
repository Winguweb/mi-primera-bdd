import React, { useState, useEffect } from 'react'
import _ from 'lodash'

const AccountsWithOportunities = () => {
  const [counter, setCounter] = useState(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    fetch('http://localhost:1337/accounts')
      .then((res) => res.json())
      .then((res) => {
        const number = _(res)
        .filter((account) => account.opportunities.length)
        .size()

        setCounter(number)
        setIsLoading(false)
      })
  }, [])

  if (isLoading) return <p>Loading...</p>

  return (
    <div>
      <h2>Cuentas con oportunidades</h2>
      <h3>{counter}</h3>
    </div>
  )
}

export default AccountsWithOportunities