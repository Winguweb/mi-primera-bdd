import { useState } from 'react'
import { Edit, Delete } from '../Icons'

const FieldItem = ({ field, eraseItem, editItem }) => {
  const [showInput, toggleInput] = useState(false)
  const [newName, setNewName] = useState(field.name)

  const handleEditItem = () => {
    editItem({
      variables: {
        id: field.id,
        name: newName
      }
    })
    toggleInput(!showInput)
  }
  return (
    <div className="my-2 p-4 w-3/4 shadow rounded border-0 flex justify-between items-center relative">
      <span className="mr-4 text-sm">{field.name}</span>
      <div className="actions">
      <button
          className="button w-4 h-4 mr-2 text-green-700"
          onClick={() => toggleInput(!showInput)}>
            <Edit />
        </button>
        <button
          className="button w-4 h-4 text-red-600"
          onClick={(e) => {
            e.preventDefault();
            eraseItem({ variables: { id: field.id } });
          }}>
            <Delete />
        </button>
      </div>
      {
        showInput &&
        <div className="absolute shadow-lg rounded bg-gray-200 hover:bg-gray-100 focus:bg-gray-100 border-b border-blue-500 top-0 left-0 mt-10 ml-40 z-10">
          <input
            type="text"
            value={newName}
            className="bg-gray-200 hover:bg-gray-100 focus:bg-gray-100 w-48 h-full p-2 "
            onChange={(e) => setNewName(e.target.value)}
            onKeyDown={(e) => {
              e.key === "Enter" && handleEditItem()
            }}
            />
        </div>
      }
    </div>
  );
};

export default FieldItem;
