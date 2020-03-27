import Header from './Header'
import FieldModule from './FieldModule'
import {
  ADD_ACCOUNT_TYPE,
  ADD_CONTACT_TYPE,
  ADD_OPPORTUNITY_TYPE,
  ADD_ORIGIN,
  ADD_STATE,
  DELETE_ACCOUNT_TYPE,
  DELETE_CONTACT_TYPE,
  DELETE_OPPORTUNITY_TYPE,
  DELETE_ORIGIN,
  DELETE_STATE
} from '../../graphql/customFields/mutation'

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
            <FieldModule
              name="Origen"
              fields={origins}
              addField={ADD_ORIGIN}
              deleteField={DELETE_ORIGIN} />
            <FieldModule
              name="Tipo"
              fields={contactTypes}
              addField={ADD_CONTACT_TYPE}
              deleteField={DELETE_CONTACT_TYPE} />
          </div>
        </div>
        <div className="py-2 w-full">
          <h2 className="text-lg mb-4 font-bold">Campos de cuenta</h2>
          <div className="flex">
            <FieldModule
              name="Tipo"
              fields={accountTypes}
              addField={ADD_ACCOUNT_TYPE}
              deleteField={DELETE_ACCOUNT_TYPE} />
          </div>
        </div>
        <div className="py-2 w-full">
          <h2 className="text-lg mb-4 font-bold">Campos de oportunidades</h2>
          <div className="flex">
            <FieldModule
              name="Estado"
              fields={states}
              addField={ADD_STATE}
              deleteField={DELETE_STATE} />
            <FieldModule
              name="Tipo"
              fields={opportunityTypes}
              addField={ADD_OPPORTUNITY_TYPE}
              deleteField={DELETE_OPPORTUNITY_TYPE} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default CustomFields