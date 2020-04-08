import { useState } from 'react'
import { useMutation } from '@apollo/react-hooks'
import { getIdFromLocalCookie } from '../../lib/auth'
import FieldItem from './FieldItem'
import AddItem from './AddItem'


const FieldModule = ({ name, fields, addField, deleteField, onSuccess }) => {
  const [field, setField] = useState('')

  const [eraseItem, { data }] = useMutation(deleteField, {
    onCompleted: () => {
      onSuccess()
    }
  })

  const [ submitItem, { submitData }] = useMutation(addField, {
    onCompleted: () => {      
      setField('')
      onSuccess()
    }
  })

  const id = getIdFromLocalCookie()

  return (
    <div className="w-1/3 pr-8 mb-8">
      <div>
        <span>{ name }</span>
      </div>
      <div className="bg-purple-white mt-4 min-h-1/4 flex flex-wrap justify-start">
        <div className="w-full">
          { fields && fields.map((field) => (
            <FieldItem key={field.id} field={field} eraseItem={eraseItem} />
          ))}
          <AddItem 
            field={field}
            setField={setField}
            id={id}
            submitItem={submitItem}
            submitData={submitData} />
        </div>
      </div>
    </div>
  )
}

export default FieldModule