import { Query } from 'react-apollo'
import { GET_ACCOUNT_FIELDS } from '../../graphql/account/query/getAccountFields'
import { CREATE_ACCOUNT } from '../../graphql/account/mutation/createAccount'
import { DELETE_CONTACT } from '../../graphql/contact/mutation/deleteContact'
import { DELETE_OPPORTUNITY } from '../../graphql/opportunity/mutation/deleteOpportunity'
import { getIdFromLocalCookie } from '../../lib/auth'
import { contactFields, opportunityFields } from './fields'
import securePage from '../../hocs/securePage'
import AccountForm from '../../components/AccountForm'
import Table from '../../components/List/Table'


const NewAccount = () => {
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
            <Table info={data.contacts} workspace="contact" fields={contactFields} delete={DELETE_CONTACT} />
            <Table info={data.opportunities} workspace="opportunity" fields={opportunityFields} delete={DELETE_OPPORTUNITY} />
          </>
        )
      }}
    </Query>
  )
}

export default securePage(NewAccount)