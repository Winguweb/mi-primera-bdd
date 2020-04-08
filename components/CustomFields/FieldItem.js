import { Edit, Delete } from '../Icons'

const FieldItem = ({ field, eraseItem }) => {
  return (
    <div className="my-2 p-4 w-3/4 shadow rounded border-0 flex justify-between items-center">
      <span className="mr-4 text-sm">{field.Name || field.name}</span>
      <div className="actions">
      <button
          className="button w-4 h-4 mr-2 text-green-700"
          onClick={(e) => {
            e.preventDefault();
            eraseItem({ variables: { id: field.id } });
          }}>
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
    </div>
  );
};

export default FieldItem;
