import { Query } from 'react-apollo'
import { GET_ACCOUNT_FIELDS } from '../../graphql/account/query/getAccountFields'
import { CREATE_ACCOUNT } from '../../graphql/account/mutation/createAccount'
import { DELETE_CONTACT } from '../../graphql/contact/mutation/deleteContact'
import { DELETE_OPPORTUNITY } from '../../graphql/opportunity/mutation/deleteOpportunity'
import { getIdFromLocalCookie } from '../../lib/auth'
import securePage from '../../hocs/securePage'
import AccountForm from '../../components/AccountForm'
import Table from '../../components/List/Table'


const NewAccount = () => {
  const contactField = [
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
  const Opportunityfields = [
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
            <Table info={data.contacts} workspace="contact" fields={contactField} delete={DELETE_CONTACT} />
            <Table info={data.opportunities} workspace="opportunity" fields={Opportunityfields} delete={DELETE_OPPORTUNITY} />


          </>
        )
      }}
    </Query>
  )
}

export default securePage(NewAccount)