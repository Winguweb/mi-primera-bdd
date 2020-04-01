import { useRouter } from 'next/router'
import { Query } from 'react-apollo'
import { GET_ACCOUNT } from '../../graphql/account/query/getAccount'
import { EDIT_ACCOUNT } from '../../graphql/account/mutation/editAccount'
import { getIdFromLocalCookie } from '../../lib/auth'
import securePage from '../../hocs/securePage'
import AccountForm from '../../components/AccountForm'

const Account = (props) => {
  const router= useRouter()
  return (
    <Query query={GET_ACCOUNT} variables={{ id: router.query.id, organization: getIdFromLocalCookie()}}>
      {({ loading, data, error }) => {
        if (loading || !data) {
          return <p>Cargando...</p>;
        }

        return (
          <AccountForm
            data={data}
            mutation={EDIT_ACCOUNT} />
        )
      }}
    </Query>
  )
}

export default securePage(Account)