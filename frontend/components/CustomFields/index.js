import Header from './Header'
import FieldModule from './FieldModule'

const CustomFields = ({ data }) => {
  const { 
    contactTypes,
    origins,
    accountTypes,
    states,
    opportunityTypes
  } = data

  return (
    <div className="p-2">
      <Header />
      <div className="mt-4">
        <div className="py-2 w-full">
          <h2 className="text-lg mb-4 font-bold">Campos de contacto</h2>
          <div className="flex">
            <FieldModule name="Origen" fields={origins} />
            <FieldModule name="Tipo" fields={contactTypes} />
          </div>
        </div>
        <div className="py-2 w-full">
          <h2 className="text-lg mb-4 font-bold">Campos de cuenta</h2>
          <div className="flex">
            <FieldModule name="Tipo" fields={accountTypes} />
          </div>
        </div>
        <div className="py-2 w-full">
          <h2 className="text-lg mb-4 font-bold">Campos de oportunidades</h2>
          <div className="flex">
            <FieldModule name="Estado" fields={states} />
            <FieldModule name="Tipo" fields={opportunityTypes} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default CustomFields