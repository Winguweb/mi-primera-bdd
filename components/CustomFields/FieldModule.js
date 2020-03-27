import { useState } from 'react'
import { useMutation } from '@apollo/react-hooks'
import Router from 'next/router'

const FieldModule = ({ name, fields, addField, deleteField }) => {
  const [field, setField] = useState('')

  const [eraseItem, { data }] = useMutation(deleteField, {
    onCompleted: () => Router.reload()
  })

  const [ submitItem, { submitData }] = useMutation(addField, {
    onCompleted: () => Router.reload()
  })

  return (
    <div className="w-1/2 pr-4">
      <div>
        <span>{ name }</span>
      </div>
      <div className="bg-purple-white shadow rounded border-0 p-4 mt-4 min-h-1/4 flex flex-wrap justify-start">
        <div className="w-full">
          { fields && fields.map((field) => (
            <button
              className="button text-white bg-blue-wingu flex items-center justify-center p-4 font-bold rounded mr-4"
              key={ field.id}
              onClick={e => {
                e.preventDefault()
                eraseItem({ variables: { id: field.id } })
              }}>
              <span className="mr-4">{ field.Name || field.name }</span>
              <span>x</span>
            </button>
          ))}
        </div>
        <div>
          <div className="relative py-4">
            <input
              type="text"
              className="w-full bg-purple-white shadow rounded border-0 p-4"
              placeholder="Agregar nueva opción"
              value={field}
              onChange={(e) => setField(e.target.value)} />
              <button
                className="button h-8 w-8 text-white bg-blue-wingu flex items-center justify-center font-bold rounded-full absolute bottom-0 right-0 mt-4 -mr-4"
                onClick={(e) => {
                  e.preventDefault()
                  submitItem({
                    variables: {
                      name: field
                    }
                  })
                }}>
                <span>+</span>
              </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FieldModule