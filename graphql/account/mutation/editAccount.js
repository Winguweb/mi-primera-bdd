import { gql } from "apollo-boost";

export const EDIT_ACCOUNT = gql`
  mutation UpdateAccount($name: String!) {
    updateAccount(input: { name: $name }) {
      account {
        id
        name
      }
    }
  }
`;