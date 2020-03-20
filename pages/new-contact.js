import securePage from '../hocs/securePage'
import ContactForm from '../components/ContactForm'

const NewContact = () => {
  return (
    <ContactForm />
  )
}

export default securePage(NewContact)