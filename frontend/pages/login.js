import { useEffect } from 'react'
import defaultPage from '../hocs/defaultPage'
import { strapiLogin } from '../lib/auth'
import Router from 'next/router'
import Cookies from 'js-cookie'
import LoginForm from '../components/LoginForm'

export default (props) => {
  console.log(props)
  return (
    <div className="h-screen max-h-screen ">
      <div className="h-full w-full max-w-xs mx-auto flex items-center">
          <LoginForm submit={() => console.log('login')} />
      </div>
    </div>
  )
}