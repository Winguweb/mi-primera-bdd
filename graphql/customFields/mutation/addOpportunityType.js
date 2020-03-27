import { gql } from "apollo-boost";

export const ADD_OPPORTUNITY_TYPE = gql`
  mutation CreateOpportunityType($name: String!) {
    createOpportunityType(input: { data: { Name: $name } }) {
      opportunityType {
        Name
      }
    }
  }
`;