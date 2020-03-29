import { gql } from "apollo-boost";

export const EDIT_OPPORTUNITY = gql`
  mutation UpdateOpportunity($name: String!) {
    updateOpportunity(input: { name: $name }) {
      opportunity {
        id
        name
      }
    }
  }
`