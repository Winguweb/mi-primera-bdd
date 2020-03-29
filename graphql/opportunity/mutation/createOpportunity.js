import { gql } from "apollo-boost";

export const CREATE_OPPORTUNITY = gql`
  mutation CreateOpportunity($name: String!) {
    createOpportunity(input: { name: $name }) {
      opportunity {
        id
        name
      }
    }
  }
`