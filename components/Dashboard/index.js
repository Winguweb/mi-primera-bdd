import { useQuery } from '@apollo/react-hooks'
import { getIdFromLocalCookie } from '../../lib/auth'
import { GET_METRICS } from '../../graphql/metrics/query/getMetrics'
import Accounts from './Charts/Accounts'
import AccountsWithOpportunities from './Charts/AccountsWithOpportunities'
import Contacts from './Charts/Contacts'
import Opportunities from './Charts/Opportunities'
import OpportunityAmounts from './Charts/OpportunityAmounts'

const Dashboard = () => {
  const { loading, error, data } = useQuery(GET_METRICS, {
    variables: {
      organization: getIdFromLocalCookie()
    }
  }) 

  return (
    <div className="p-4">
      <h2 className="mb-4 font-bold border-b-4 border-yellow-wingu text-2xl w-40">Indicadores</h2>
      <div className="mt-4 ">
        <div className="row flex mb-8 justify-between">
          <div className="w-1/3 p-4 custom-shadow rounded">
            <Opportunities loading={loading} error={error} data={data} />
          </div>
          <div className="w-3/5 p-2 custom-shadow rounded">
            <Contacts loading={loading} error={error} data={data} />
          </div>
        </div>
        <div className="row flex justify-between flex-wrap my-8">
          <div className="w-3/5 custom-shadow rounded p-2">
            <Accounts loading={loading} error={error} data={data} />
          </div>
          <div className="w-1/3 p-2 custom-shadow rounded">
            <AccountsWithOpportunities loading={loading} error={error} data={data} />
          </div>
        </div>
        <div className="row flex mb-4">
          <div className="w-1/3 p-2 custom-shadow rounded">
            <OpportunityAmounts loading={loading} error={error} data={data}/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard