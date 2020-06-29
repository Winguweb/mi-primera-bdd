import { useState, useEffect } from 'react'
import defaultPage from '../hocs/defaultPage'
import { strapiLogin } from '../lib/auth'
import Router from 'next/router'
import Cookies from 'js-cookie'
import LoginForm from '../components/LoginForm'
import Icon from '../assets/wingudata-icon.svg'
import MobileIcon from '../assets/ilustracion-mobile.svg'
import { useWindowSize } from '../hooks/useWindowSize'

const Login = (props) => {
  useEffect(() => {
    if (props.isAuthenticated) {
      Router.push("/") // redirect if you're already logged in
    }
  }, [])
  const size = useWindowSize()
  const onSubmit = ({ email, password }) => {
    handleLoading(true)
    strapiLogin(email, password).then(() => {
      console.log(Cookies.get('username'))
    }).catch((err) => {
      handleLoading(false)
      handleErrorMessage(err)
      console.log(err)
      console.log('error!')
    })
  }

  const [loading, handleLoading] = useState(false)

  const [errorMessage, handleErrorMessage] = useState(null)
  console.log(size)
  return (
    <div className="h-screen max-h-screen flex justify-center items-center" id="loginWrapper" >
      <div className="p-x h-screen w-1/4"> 
        <div className="absolute left-0 top-0 bottom-0 " id="iconWrapper" >
          {size.width > 640 && <Icon /> }
          {size.width <= 640 && <MobileIcon /> }

        </div>
      </div>
      <div className="w-2/4 ml-64" id="loginFormWrapper">
          <LoginForm 
            submit={onSubmit} 
            loading={loading}
            errorMessage={errorMessage}
            handleErrorMessage={handleErrorMessage}
          />
      </div>
    </div>
  )
}

export default defaultPage(Login)