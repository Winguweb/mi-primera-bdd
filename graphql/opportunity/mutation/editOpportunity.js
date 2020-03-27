import { gql } from "apollo-boost";

export const EDIT_OPPORTUNITY = gql`
  mutation updateOpportunity($input: updateOpportunityInput) {
    updateOpportunity(input: $input) {
      id
    }
  }
`;