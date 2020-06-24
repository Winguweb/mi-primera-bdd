import _ from 'lodash'
import Icon from '../assets/opportunity-sent.svg'
const AccountsWithOportunities = ({ data, error, loading }) => {
  let counter = false

  if (loading) return <p>Loading...</p>

  if (data) {
    const number = _([...data.accounts])
      .filter((account) => account.opportunities.length)
      .size()

    counter = number
  }

  return (
    <div className="flex flex-col justify-between">
      <h2 className="text-lg mb-4 font-bold">Cuentas con oportunidades</h2>
      <div className="px-4">
        <div className="flex items-center">
          <div>
          <Icon />
          </div>
          <h3 className="text-purple-wingu text-center text-4xl">{counter}</h3>
        </div>
        { (error || !counter) && 
          <span className="text-light-gray text-sm">Las métricas aún no están disponibles</span>
        }
      </div>
    </div>
  )
}

export default AccountsWithOportunities