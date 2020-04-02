import { gql } from "apollo-boost";

export const ADD_OPPORTUNITY_TYPE = gql`
  mutation CreateOpportunityType($name: String!, $organization: ID!) {
    createOpportunityType(input: { data: { Name: $name, organizacion: $organization } }) {
      opportunityType {
        Name
      }
    }
  }
`;