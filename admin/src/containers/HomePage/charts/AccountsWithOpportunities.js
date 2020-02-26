import React, { useState, useEffect } from 'react'
import _ from 'lodash'
import styled from 'styled-components'

const Counter = styled.h3`
  font-size: 8rem;
  color: #2680FF;
  text-align: center;
  height: 150px;
  margin: 5rem 0 0;
`

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

const Span = styled.span`
  color: #919BAE;
  text-align: center;
`

const AccountsWithOportunities = () => {
  const [counter, setCounter] = useState(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const token = sessionStorage.getItem('jwtToken')
    fetch(`${strapi.backendURL}/accounts`, {
      headers: {
        Authorization: `Bearer ${JSON.parse(token)}`
      }
    })
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
    <Wrapper>
      <h2>Cuentas con oportunidades</h2>
      <Counter>{counter}</Counter>
      { !counter && 
        <Span>Las métricas aún no están disponibles</Span>
      }
    </Wrapper>
  )
}

export default AccountsWithOportunities