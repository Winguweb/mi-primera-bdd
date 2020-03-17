import securePage from '../hocs/securePage'
import List from '../components/List'

const Opportunities = props => {
  return (
    <List name="Gestión de oportunidades" />
  )
}

export default securePage(Opportunities)