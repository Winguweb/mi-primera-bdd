import { Query } from 'react-apollo'
import { GET_CONTACT_FIELDS } from '../../graphql/contact/query/getContactFields'
import { CREATE_CONTACT } from '../../graphql/contact/mutation/createContact'
import { getIdFromLocalCookie } from '../../lib/auth'
import securePage from '../../hocs/securePage'
import ContactForm from '../../components/ContactForm'

const Contact = () => {

  return (
    <Query query={GET_CONTACT_FIELDS}  variables={{organization: getIdFromLocalCookie()}}>
      {({ loading, data, error }) => {
        if (loading || !data) {
          return <p>Cargando...</p>;
        }
        return (
          <ContactForm
            data={data}
            mutation={CREATE_CONTACT} />
        )
      }}
    </Query>
  )
}

export default securePage(Contact)