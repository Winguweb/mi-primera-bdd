import Header from './Header'
import FieldModule from './FieldModule'

const CustomFields = () => {
  return (
    <div className="p-2">
      <Header />
      <div className="mt-4">
        <div className="py-2 w-full">
          <h2 className="text-lg mb-4 font-bold">Campos de contacto</h2>
          <div className="flex">
            <FieldModule name="Origen" />
            <FieldModule name="Tipo" />
          </div>
        </div>
        <div className="py-2 w-full">
          <h2 className="text-lg mb-4 font-bold">Campos de cuenta</h2>
          <div className="flex">
            <FieldModule name="Tipo" />
          </div>
        </div>
        <div className="py-2 w-full">
          <h2 className="text-lg mb-4 font-bold">Campos de oportunidades</h2>
          <div className="flex">
            <FieldModule name="Estado" />
            <FieldModule name="Tipo" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default CustomFields