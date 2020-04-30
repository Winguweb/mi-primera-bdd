import React from 'react'
import { UpTriangle, DownTriangle } from '../Icons'

const TableHeader = ({ field, order, handleOrder }) => {
  return (
    <th className="py-4 px-6 bg-grey-lightest font-bold uppercase text-sm text-grey-dark border-b border-grey-light cursor-pointer" onClick={() => { handleOrder(field.key, order) }}>      
      <div className='flex items-center'>
      {field.name} 
      { order && (
        <div className="ml-2 h-2 w-2 inline text-green-wingu">
          { order === 'asc' ? (
            <UpTriangle />
          ) : (
            <DownTriangle />
          )}
        </div>
      )}  
      </div>
    </th>    
  )
}

export default TableHeader