import { Query } from 'react-apollo'
import { GET_ACCOUNT_FIELDS } from '../../graphql/account/query/getAccountFields'
import securePage from '../../hocs/securePage'
import AccountForm from '../../components/AccountForm'

const NewAccount = () => {
  return (
    <Query query={GET_ACCOUNT_FIELDS}>
      {({ loading, data, error }) => {
        if (loading || !data) {
          return <p>Cargando...</p>;
        }
        return (
          <AccountForm data={data} />
        )
      }}
    </Query>
  )
}

export default securePage(NewAccount)