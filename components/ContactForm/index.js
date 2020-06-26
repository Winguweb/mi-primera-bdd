import { useState, useEffect } from 'react'
import { useMutation } from '@apollo/react-hooks'
import { CREATE_ACCOUNT } from '../../graphql/account/mutation/createAccount'
import { getIdFromLocalCookie } from '../../lib/auth'
import Router from 'next/router'
import Form from './Form'
import Header from '../FormHeader'

const ContactForm = ({ data, mutation }) => {
  
  const [submitFormData, handleSubmit] = useState(null)

  const [createAccount] = useMutation(CREATE_ACCOUNT, {
    onCompleted: (res) => {
      addContact({
        variables: {
          ...submitFormData,
          account: res.createAccount.account.id,
          organization: getIdFromLocalCookie()
        }
      })
    }
  })

  const [addContact] = useMutation(mutation, {
    onCompleted: () => Router.push({ pathname: '/contacts', query: { success: 'true'} })
  })

  useEffect(() => {
    if (submitFormData) {
      if (!submitFormData.account || submitFormData.account === 'new') {
        const accountName = "Familia " + submitFormData.lastname
        const nameExists = data.accounts.filter((obj) => obj.name.includes(accountName))
        createAccount({
          variables: {
            name: nameExists.length > 0 ? (accountName + (nameExists.length + 1)) : accountName,
            organization: getIdFromLocalCookie()
          }
        })
      } else {
        addContact({
          variables: {
            ...submitFormData,
            id: data.contact.id ? data.contact.id : null,
            organization: getIdFromLocalCookie()
          }
        })
      }
    }
   
  }, [submitFormData])
  
  return (
    <div className="p-2">
      <Header
        title="Gestión de contactos"
        link="/contacts" >
        { !data.contact
          ? 'Crear contacto'
          : 'Editar contacto'
        }
      </Header>
      <Form
        data={data}
        mode={!data.contact ? 'create' : 'edit'}
        handleSubmit={handleSubmit}
      />
    </div>
  )
}

export default ContactForm