import { gql } from "apollo-boost";

export const CREATE_OPPORTUNITY = gql`
  mutation CreateOpportunity($name: String!, $organization: ID!) {
    createOpportunity(input: { data: { name: $name, organizacion: $organization }}) {
      opportunity {
        id
        name
      }
    }
  }
`