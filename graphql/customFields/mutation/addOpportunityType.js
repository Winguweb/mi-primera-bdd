import { gql } from "apollo-boost";

export const ADD_OPPORTUNITY_TYPE = gql`
  mutation CreateOpportunityType($name: String!, $organization: ID!) {
    createOpportunityType(input: { data: { name: $name, organizacion: $organization } }) {
      opportunityType {
        name
      }
    }
  }
`;