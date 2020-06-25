import { Query } from 'react-apollo'
import { GET_ACCOUNT_FIELDS } from '../../graphql/account/query/getAccountFields'
import { CREATE_ACCOUNT } from '../../graphql/account/mutation/createAccount'
import { getIdFromLocalCookie } from '../../lib/auth'
import securePage from '../../hocs/securePage'
import AccountForm from '../../components/AccountForm'


const NewAccount = () => {
  const contactFields = [
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
  
  const opportunityFields = [
    { name: 'Nombre de la oportunidad',
      key: 'name'
    },
    { name: 'Estado',
      key: 'state'
    },
    { name: 'Tipo',
      key: 'opportunity_type'
    },
    { name: 'Cuenta',
      key: 'account'
    },
    { name: 'Fecha',
      key: 'date'
    },
  ]
  return (
    <Query query={GET_ACCOUNT_FIELDS}  variables={{organization: getIdFromLocalCookie()}}>
      {({ loading, data, error }) => {
        if (loading || !data) {
          return <p>Cargando...</p>;
        }
        return (
          <>
            <AccountForm
              data={data}
              mutation={CREATE_ACCOUNT} />            
          </>
        )
      }}
    </Query>
  )
}

export default securePage(NewAccount)