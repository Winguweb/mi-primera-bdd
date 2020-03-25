import { Query } from 'react-apollo'
import { GET_CONTACT_FIELDS } from '../../graphql/contact/query/getContactFields'
import securePage from '../../hocs/securePage'
import ContactForm from '../../components/ContactForm'

const Contact = () => {

  return (
    <Query query={GET_CONTACT_FIELDS}>
      {({ loading, data, error }) => {
        if (loading || !data) {
          return <p>Cargando...</p>;
        }
        return (
          <ContactForm data={data} />
        )
      }}
    </Query>
  )
}

export default securePage(Contact)