import { gql } from "apollo-boost";

export const CREATE_OPPORTUNITY = gql`
  mutation CreateOpportunity($name: String!) {
    createOpportunity(input: { data: { name: $name }}) {
      opportunity {
        id
        name
      }
    }
  }
`