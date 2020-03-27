import securePage from '../../hocs/securePage'
import OpportunityForm from '../../components/OpportunityForm'

const Opportunity = () => {
  return (
    <OpportunityForm />
  )
}

export default securePage(Opportunity)