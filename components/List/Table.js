const Table = ({ fields, data }) => {
  return (
    <div className="w-full mx-auto">
      <div className="bg-white shadow-md my-6">
        <table className="text-left w-full border-collapse">
          <thead>
            <tr>
              { fields && fields.map((field, i) => (
                <th className="py-4 px-6 bg-grey-lightest font-bold uppercase text-sm text-grey-dark border-b border-grey-light" key={i}>{field.name}</th>
              ))}
              <th className="py-4 px-6 bg-grey-lightest font-bold uppercase text-sm text-grey-dark border-b border-grey-light"></th>
            </tr>
          </thead>
          <tbody>
            { data && data.map((item, i) => (
              <tr className="bg-grey-lighter" key={i}>
                { fields && fields.map((field, j) => {
                  return (<td className="py-4 px-6 border-b border-grey-light" key={j}>{item[field.key]}</td>)
                })}
                <td className="py-4 px-6 border-b border-grey-light">
                  <a href="#" className="text-grey-lighter font-bold py-1 px-3 rounded text-xs bg-green hover:bg-green-dark">Editar</a>
                  <a href="#" className="text-grey-lighter font-bold py-1 px-3 rounded text-xs bg-blue hover:bg-blue-dark">Eliminar</a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Table