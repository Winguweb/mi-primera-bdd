import { gql } from "apollo-boost";

export const EDIT_OPPORTUNITY = gql`
  mutation UpdateOpportunity($name: String!,
    $date: Date,
    $ammount: Float,
    $currency: ENUM_OPPORTUNITY_CURRENCY,
    $observations: String,
    $state: ID,
    $opportunity_type: ID,
    $account: ID,
    $organization: ID!)) {
    updateOpportunity(input: { 
      data: { 
        name: $name,
        date: $date,
        ammount: $ammount,
        currency: $currency,
        observations: $observations,
        state: $state,
        opportunity_type: $opportunity_type,
        account: $account,
        organizacion: $organization
      }
    }) {
      opportunity {
        id
        name
      }
    }
  }
`