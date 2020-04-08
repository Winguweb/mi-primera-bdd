import { useState } from 'react'

const AddItem = ({ field, setField, id, submitItem, submitData }) => {
  const [showInput, toggleInput] = useState(false)

  const handleSubmit = () => {
    submitItem({
      variables: {
        name: field,
        organization: id,
      }
    })
    toggleInput(false)
  }
  return (
    <div className="w-3/4">
      {
        showInput &&
        <input
          type="text"
          className="w-full bg-purple-white shadow rounded border-0 my-2 p-4 text-sm"
          placeholder="Agregar nueva opción"
          value={field}
          onChange={(e) => setField(e.target.value)}
          onKeyDown={(e) => {
            e.key === "Enter" && handleSubmit()
          }}
        />
      }
      <button
        onClick={() => toggleInput(!showInput)}
        className="w-full rounded hover:bg-gray-300 text-gray-600 text-sm p-4">+ Nueva opción</button>
    </div>
  )
}

export default AddItem;
