import { gql } from "apollo-boost";

export const EDIT_ACCOUNT = gql`
  mutation updateAccount($input: updateAccountInput) {
    updateAccount(input: $input) {
      id
    }
  }
`;