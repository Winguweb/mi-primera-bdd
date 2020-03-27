import { gql } from "apollo-boost";

export const CREATE_ACCOUNT = gql`
  mutation createAccount($input: createAccountInput) {
    createAccount(input: $input) {
      id
  }
`;