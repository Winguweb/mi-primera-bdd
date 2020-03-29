import { useRouter } from 'next/router'
import { Query } from 'react-apollo'
import { GET_CONTACT } from '../../graphql/contact/query/getContact'
import { EDIT_CONTACT } from '../../graphql/contact/mutation/editContact'
import securePage from '../../hocs/securePage'
import ContactForm from '../../components/ContactForm'

const Contact = (props) => {
  const router = useRouter()

  return (
    <Query query={GET_CONTACT} variables={{ id: router.query.id}}>
      {({ loading, data, error }) => {
        if (loading || !data) {
          return <p>Cargando...</p>;
        }

        return (
          <ContactForm
            data={data}
            mutation={EDIT_CONTACT} />
        )
      }}
    </Query>
  )
}

export default securePage(Contact)
