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
  return (
    <div>
      <div className="md:h-screen md:max-h-screen md:flex md:justify-center md:items-center md:flex-row-reverse" id="loginWrapper" >
        <div className="w-2/4 ml-64" id="loginFormWrapper">
          <LoginForm 
            submit={onSubmit} 
            loading={loading}
            errorMessage={errorMessage}
            handleErrorMessage={handleErrorMessage}
          />
        </div>
        {size.width > 640 && (
          <div className="md:p-x md:h-screen md:w-1/4"> 
            <div className="absolute left-0 top-0 bottom-0">
              <Icon />
            </div>
          </div>
        )}
      </div>
      {size.width <= 640 && (
        <div className="fixed bottom-0" id="mobileLogo">
          <MobileIcon />
        </div>
      )}
    </div>
  )
}

export default defaultPage(Login)