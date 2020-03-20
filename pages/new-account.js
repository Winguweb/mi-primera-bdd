import securePage from '../hocs/securePage'
import AccountForm from '../components/AccountForm'

const NewAccount = () => {
  return (
    <AccountForm />
  )
}

export default securePage(NewAccount)