import { gql } from "apollo-boost";

export const DELETE_OPPORTUNITY_TYPE = gql`
  mutation DeleteOpportunityType($id: ID!) {
    deleteOpportunityType(input: { where: { id: $id } }) {
      opportunityType {
        name
      }
    }
  }
`