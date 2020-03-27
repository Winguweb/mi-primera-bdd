import securePage from '../../hocs/securePage'
import OpportunityForm from '../../components/OpportunityForm'

const NewOpportunity = () => {
  return (
    <OpportunityForm />
  )
}

export default securePage(NewOpportunity)