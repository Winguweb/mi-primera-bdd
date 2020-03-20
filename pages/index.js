import securePage from '../hocs/securePage'
import Dashboard from '../components/Dashboard'

const Index = props => {
  const { loggedUser } = props

  return (
    <Dashboard loggedUser={loggedUser} />
  )
}

export default securePage(Index)