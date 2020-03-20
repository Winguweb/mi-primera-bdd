import { Query } from 'react-apollo'
import { GET_CUSTOM_FIELDS } from '../graphql/customFields/query/getCustomFields'
import securePage from '../hocs/securePage'
import CustomFields from '../components/CustomFields'

const Customize = props => {
  return (
    <Query query={GET_CUSTOM_FIELDS}>
      {({ loading, data, error }) => {

      if (loading || !data) {
        return <p>Cargando...</p>;
      }

      return (
        <CustomFields data={data} />
      )}}
    </Query>
  )
}

export default securePage(Customize)