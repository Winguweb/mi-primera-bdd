import Header from './Header'
import Form from './Form'

const ContactForm = ({ data }) => {
  return (
    <div className="p-2">
      <Header mode={!data.contact ? 'create' : 'edit'} />
      <Form data={data} />
    </div>
  )
}

export default ContactForm