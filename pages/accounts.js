import { Query } from 'react-apollo'
import Cookies from 'js-cookie'
import { getIdFromLocalCookie } from '../lib/auth'
import { GET_ACCOUNTS } from '../graphql/account/query/getAccounts'
import { DELETE_ACCOUNT } from '../graphql/account/mutation/deleteAccount'
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
    link: "/account/new"
  }

  const id = Cookies.get("id")

  return (
    <Query query={GET_ACCOUNTS} variables={{organization: getIdFromLocalCookie()}}>
      {({ loading, data, error }) => {

      if (loading || !data) {
        return <p>Cargando...</p>;
      }

      return (
        <List 
          cta={cta}
          data={data.accounts}
          fields={fields}
          title={title}
          workspace="account"
          delete={DELETE_ACCOUNT}
          refetch={GET_ACCOUNTS} />
      )}}
    </Query>
  )
}

export default securePage(Accounts)