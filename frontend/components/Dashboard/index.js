import Header from './Header'
import Accounts from './Charts/Accounts'
import AccountsWithOpportunities from './Charts/AccountsWithOpportunities'
import Contacts from './Charts/Contacts'
import Opportunities from './Charts/Opportunities'

const Dashboard = () => {
  return (
    <div className="p-2">
      <Header />
      <div className="mt-4">
        <div className="row flex mb-4">
          <div className="w-1/2 border-solid border-2 border-gray-600 h-12">
            <Opportunities />
          </div>
          <div className="w-1/2 border-solid border-2 border-gray-600 h-12">
            <Contacts />
          </div>
        </div>
        <div className="row flex mb-4">
          <div className="w-1/2 border-solid border-2 border-gray-600 h-12">
            <Accounts />
          </div>
          <div className="w-1/2 border-solid border-2 border-gray-600 h-12">
            <AccountsWithOpportunities />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard