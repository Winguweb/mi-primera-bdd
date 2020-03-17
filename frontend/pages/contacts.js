import securePage from '../hocs/securePage'
import List from '../components/List'

const Contacts = props => {
  return (
    <List name="Gestión de contactos" />
  )
}

export default securePage(Contacts)