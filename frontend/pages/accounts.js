import securePage from '../hocs/securePage'
import List from '../components/List'

const Accounts = props => {
  return (
    <List name="Gestión de cuentas" />
  )
}

export default securePage(Accounts)