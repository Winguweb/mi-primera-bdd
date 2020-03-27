import { gql } from "apollo-boost";

export const CREATE_OPPORTUNITY = gql`
  mutation createOpportunity($input: createOpportunityInput) {
    createOpportunity(input: $input) {
      id
  }
`;