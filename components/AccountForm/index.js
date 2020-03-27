import Form from './Form'
import Header from '../FormHeader'

const AccountForm = (props) => {
  return (
    <div className="p-2">
      <Header
        title="Gestión de cuentas"
        link="/accounts" >
        { !props.data.account
          ? 'Crear cuenta'
          : 'Editar cuenta'
        }
      </Header>
      <Form {...props} />
    </div>
  )
}

export default AccountForm