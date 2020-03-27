import securePage from '../../hocs/securePage'
import AccountForm from '../../components/AccountForm'

const Account = () => {
  return (
    <AccountForm />
  )
}

export default securePage(Account)