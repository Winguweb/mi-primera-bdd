import { Query } from 'react-apollo'
import { GET_OPPORTUNITY_FIELDS } from '../../graphql/opportunity/query/getOpportunityFields'
import { CREATE_OPPORTUNITY } from '../../graphql/opportunity/mutation/createOpportunity'
import securePage from '../../hocs/securePage'
import OpportunityForm from '../../components/OpportunityForm'

const NewOpportunity = () => {
  return (
    <Query query={GET_OPPORTUNITY_FIELDS}>
      {({ loading, data, error }) => {
        if (loading || !data) {
          return <p>Cargando...</p>;
        }
        return (
          <OpportunityForm
            data={data}
            mutation={CREATE_OPPORTUNITY}
            />
        )
      }}
    </Query>
  )
}

export default securePage(NewOpportunity)