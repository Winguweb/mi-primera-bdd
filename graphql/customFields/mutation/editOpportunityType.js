import { gql } from "apollo-boost";

export const EDIT_OPPORTUNITY_TYPE = gql`
  mutation EditOpportunityType($id: ID!, $name: String!) {
    updateOpportunityType(input: { 
      where: { id: $id },
      data: { name: $name }
    }) {
      opportunityType {
        name
      }
    }
  }
`