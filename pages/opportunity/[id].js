import { useRouter } from 'next/router'
import { Query } from 'react-apollo'
import { GET_OPPORTUNITY} from '../../graphql/opportunity/query/getOpportunity'
import { EDIT_OPPORTUNITY } from '../../graphql/opportunity/mutation/editOpportunity'
import securePage from '../../hocs/securePage'
import OpportunityForm from '../../components/OpportunityForm'

const Opportunity = (props) => {
  const router = useRouter()
  return (
    <Query query={GET_OPPORTUNITY} variables={{ id: router.query.id}}>
      {({ loading, data, error }) => {
        if (loading || !data) {
          return <p>Cargando...</p>;
        }

        return (
          <OpportunityForm
            data={data}
            mutation={EDIT_OPPORTUNITY} />
        )
      }}
    </Query>
  )
}

export default securePage(Opportunity)