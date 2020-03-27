import Header from './Header'
import Form from './Form'

const AccountForm = (props) => {
  return (
    <div className="p-2">
      <Header />
      <Form {...props} />
    </div>
  )
}

export default AccountForm