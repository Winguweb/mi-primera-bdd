import { useRouter } from 'next/router'
import { Query } from 'react-apollo'
import { GET_ACCOUNT } from '../../graphql/account/query/getAccount'
import securePage from '../../hocs/securePage'
import AccountForm from '../../components/AccountForm'

const Account = (props) => {
  const router= useRouter()
  return (
    <Query query={GET_ACCOUNT} variables={{ id: router.query.id}}>
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

export default securePage(Account)