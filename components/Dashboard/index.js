import { useQuery } from '@apollo/react-hooks'
import { getIdFromLocalCookie } from '../../lib/auth'
import { GET_METRICS } from '../../graphql/metrics/query/getMetrics'
import Header from './Header'
import Accounts from './Charts/Accounts'
import AccountsWithOpportunities from './Charts/AccountsWithOpportunities'
import Contacts from './Charts/Contacts'
import Opportunities from './Charts/Opportunities'
import OpportunityAmounts from './Charts/OpportunityAmounts'

const Dashboard = ({ loggedUser }) => {
  const { loading, error, data } = useQuery(GET_METRICS, {
    variables: {
      organization: getIdFromLocalCookie()
    }
  }) 

  return (
    <div className="p-2">
      <Header loggedUser={loggedUser} />
      <div className="mt-4">
        <div className="row flex mb-4">
          <div className="w-1/2 p-2">
            <Opportunities loading={loading} error={error} data={data} />
          </div>
          <div className="w-1/2 p-2">
            <Contacts loading={loading} error={error} data={data} />
          </div>
        </div>
        <div className="row flex mb-4">
          <div className="w-1/2 p-2">
            <Accounts loading={loading} error={error} data={data} />
          </div>
          <div className="w-1/2 p-2">
            <AccountsWithOpportunities loading={loading} error={error} data={data} />
          </div>
        </div>
        <div className="row flex mb-4">
          <div className="w-1/2 p-2">
            <OpportunityAmounts loading={loading} error={error} data={data}/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard