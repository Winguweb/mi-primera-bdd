import Form from './Form'
import Header from '../FormHeader'

const ContactForm = ({ data }) => {
  return (
    <div className="p-2">
      <Header
        title="Gestión de contactos"
        link="/contacts" >
        { !data.contact
          ? 'Crear contacto'
          : 'Editar contacto'
        }
      </Header>
      <Form
        data={data}
        mode={!data.contact ? 'create' : 'edit'} />
    </div>
  )
}

export default ContactForm