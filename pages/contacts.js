import { useState } from 'react'
import { Query } from 'react-apollo'
import { getIdFromLocalCookie } from '../lib/auth'
import { GET_CONTACTS } from '../graphql/contact/query/getContacts'
import { DELETE_CONTACT } from '../graphql/contact/mutation/deleteContact'
import securePage from '../hocs/securePage'
import List from '../components/List'

const Contacts = props => {
  const [search, setSearch] = useState('') 
  const title = "Gestión de contactos"
  const fields = [
    { name: 'Nombre',
      key: 'name'
    },
    { name: 'Apellido',
      key: 'lastname'
    },
    { name: 'Tipo',
      key: 'contact_type'
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
      key: 'account'
    },
  ]

  const cta = {
    title: "Nuevo contacto",
    link: "/contact/new"
  }
  return (
    <Query 
      query={GET_CONTACTS}
      variables={{
        organization: getIdFromLocalCookie(),
        search: search
      }}
      fetchPolicy={"network-only"} >
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
          workspace="contact"
          delete={DELETE_CONTACT}
          refetch={GET_CONTACTS}
          handleSearch={setSearch} />
      )}}
    </Query>
  )
}

export default securePage(Contacts)