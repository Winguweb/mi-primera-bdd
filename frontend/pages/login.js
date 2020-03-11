
import { useMutation } from '@apollo/react-hooks'
import { LOGIN_MUTATION } from '../graphql/user/mutation/login'
import LoginForm from '../components/LoginForm'

export default () => {

  const [ loginUser, { data }] = useMutation(LOGIN_MUTATION)

  return (
    <div className="h-screen max-h-screen ">
      <div className="h-full w-full max-w-xs mx-auto flex items-center">
          <LoginForm submit={loginUser} />
      </div>
    </div>
  )
}