import { gql } from "apollo-boost";

export const ADD_OPPORTUNITY_TYPE = gql`
  mutation {
    createOpportunityType(input: { data: { name: "Tipo 1" } }) {
      opportunityType {
        name
      }
    }
  }
`;