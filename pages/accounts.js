import { Query } from 'react-apollo'
import { GET_ACCOUNTS } from '../graphql/account/query/getAccounts'
import securePage from '../hocs/securePage'
import List from '../components/List'

const Accounts = props => {
  const title = "Gestión de cuentas"
  const fields = [
    { name: 'Nombre de la cuenta',
      key: 'name'
    },
    { name: 'Tipo',
      key: 'account_type.name'
    },
    { name: 'Email',
      key: 'email'
    },
    { name: 'Teléfono',
      key: 'phone'
    }
  ]

  const cta = {
    title: "Nueva cuenta",
    link: "/new-account"
  }
  return (
    <Query query={GET_ACCOUNTS}>
      {({ loading, data, error }) => {

      if (loading || !data) {
        return <p>Cargando...</p>;
      }

      return (
        <List 
          cta={cta}
          data={data.accounts}
          fields={fields}
          title={title}/>
      )}}
    </Query>
  )
}

export default securePage(Accounts)