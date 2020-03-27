import { gql } from "apollo-boost";

export const DELETE_OPPORTUNITY = gql`
  deleteOpportunity(input: { where: { id: ID! } }) {
    opportunity {
      id
      name
    }
  }
`