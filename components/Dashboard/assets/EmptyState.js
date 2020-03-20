import React from 'react'

const EmptyState = (props) => {
  return (
    <div className="flex flex-col items-center my-2">
      { props.children }
      <span className="mt-1">Las métricas aún no están disponibles</span>
      <div style={{ display: 'none' }}>Icons made by <a href="https://www.flaticon.com/authors/kiranshastry" title="Kiranshastry">Kiranshastry</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
    </div>
  )
}

export default EmptyState
