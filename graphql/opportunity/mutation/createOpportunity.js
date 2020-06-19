import { gql } from "apollo-boost";

export const CREATE_OPPORTUNITY = gql`
  mutation CreateOpportunity(
    $name: String!,
    $date: Date,
    $ammount: String,
    $currency: ENUM_OPPORTUNITY_CURRENCY,
    $observations: String,
    $state: ID,
    $opportunity_type: ID,
    $account: ID,
    $organization: ID!) {

    createOpportunity(input: { data: { 
      name: $name,
      date: $date,
      ammount: $ammount,
      currency: $currency,
      observations: $observations,
      state: $state,
      opportunity_type: $opportunity_type,
      account: $account,
      organizacion: $organization
    }}) {
      opportunity {
        id
        name
      }
    }
  }
`