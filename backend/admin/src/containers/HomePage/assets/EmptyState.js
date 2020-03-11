import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  align-items: center;
  color: #919BAE;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  margin: 4rem 0;
`

const Span = styled.span`
  margin-top: 1rem;
`

const EmptyState = (props) => {
  return (
    <Wrapper>
      { props.children }
      <Span>Las métricas aún no están disponibles</Span>
      <div style={{ display: 'none' }}>Icons made by <a href="https://www.flaticon.com/authors/kiranshastry" title="Kiranshastry">Kiranshastry</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
    </Wrapper>
  )
}

export default EmptyState
