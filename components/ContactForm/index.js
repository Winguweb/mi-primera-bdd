import Form from './Form'

const ContactForm = ({ data }) => {
  return (
    <div className="p-2">
      <Form
        data={data}
        mode={!data.contact ? 'create' : 'edit'} />
    </div>
  )
}

export default ContactForm