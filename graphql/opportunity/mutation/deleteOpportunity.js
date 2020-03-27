import { gql } from "apollo-boost";

export const DELETE_OPPORTUNITY = gql`
  mutation DeleteOpportunity($id: ID!) {
    deleteOpportunity(input: { where: { id: $id } }) {
      opportunity {
        id
        name
      }
    }
  }
`