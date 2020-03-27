import Form from './Form'
import Header from '../FormHeader'

const OpportunityForm = (props) => {
  return (
    <div className="p-2">
      <Header
        title="Gestión de oportunidades"
        link="/opportunities" >
        { !props.data.opportunity
          ? 'Crear oportunidad'
          : 'Editar oportunidad'
        }
      </Header>
      <Form {...props} />
    </div>
  )
}

export default OpportunityForm