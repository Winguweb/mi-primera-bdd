import React, { useState, useEffect } from 'react'
import _ from 'lodash'
import styled from 'styled-components'

const Counter = styled.h3`
  font-size: 8rem;
  color: #2680FF;
  margin-top: auto;
  margin-bottom: auto;
  text-align: center;
`

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  height: 100%;
`

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
    <Wrapper>
      <h2>Cuentas con oportunidades</h2>
      <Counter>{counter}</Counter>
    </Wrapper>
  )
}

export default AccountsWithOportunities