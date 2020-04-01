import { useEffect } from 'react'
import defaultPage from '../hocs/defaultPage'
import { strapiLogin } from '../lib/auth'
import Router from 'next/router'
import Cookies from 'js-cookie'
import LoginForm from '../components/LoginForm'

const Login = (props) => {
  useEffect(() => {
    if (props.isAuthenticated) {
      Router.push("/") // redirect if you're already logged in
    }
  }, [])

  const onSubmit = ({ email, password }) => {
    strapiLogin(email, password).then(() => {
      console.log(Cookies.get('username'))
    })
  }

  return (
    <div className="h-screen max-h-screen ">
      <div className="h-full w-full max-w-xs mx-auto flex items-center">
        <LoginForm submit={onSubmit} />
      </div>
    </div>
  )
}

export default defaultPage(Login)