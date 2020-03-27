import { Query } from 'react-apollo'
import { GET_CONTACTS } from '../graphql/contact/query/getContacts'
import securePage from '../hocs/securePage'
import List from '../components/List'

const Contacts = props => {
  const title = "Gestión de contactos"
  const fields = [
    { name: 'Nombre',
      key: 'name'
    },
    { name: 'Apellido',
      key: 'lastname'
    },
    { name: 'Nombre',
      key: 'name'
    },
    { name: 'Tipo',
      key: 'contact_type.Name'
    },
    { name: 'Email',
      key: 'email'
    },
    { name: 'Teléfono',
      key: 'phone'
    },
    { name: 'Género',
      key: 'gender'
    },
    { name: 'Cuenta',
      key: 'account.name'
    },
  ]

  const cta = {
    title: "Nuevo contacto",
    link: "/contact/new"
  }
  return (
    <Query query={GET_CONTACTS}>
      {({ loading, data, error }) => {

      if (loading || !data) {
        return <p>Cargando...</p>;
      }

      return (
        <List 
          cta={cta}
          data={data.contacts}
          fields={fields}
          title={title}
          workspace="contact" />
      )}}
    </Query>
  )
}

export default securePage(Contacts)