import { Query } from 'react-apollo'
import { GET_ACCOUNTS } from '../graphql/account/query/getAccounts'
import securePage from '../hocs/securePage'
import List from '../components/List'

const Accounts = props => {
  return (
    <Query query={GET_ACCOUNTS}>
      {({ loading, data, error }) => {
        console.log(error)
      if (loading || !data) {
        return <p>loading</p>;
      }
      
      return (
        <List name="Gestión de cuentas" />
      )}}
    </Query>
  )
}

export default securePage(Accounts)