import React from 'react'

const EmptyState = (props) => {
  return (
    <div className="flex flex-col items-center p-4 my-2">
      <span className="mt-1 text-light-gray text-sm pb-2">Las métricas aún no están disponibles</span>
      { props.children }
      <div style={{ display: 'none' }}>Icons made by <a href="https://www.flaticon.com/authors/kiranshastry" title="Kiranshastry">Kiranshastry</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
    </div>
  )
}

export default EmptyState
