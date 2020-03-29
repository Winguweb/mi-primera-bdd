import { gql } from "apollo-boost";

export const CREATE_ACCOUNT = gql`
  mutation CreateAccount($name: String!) {
    createAccount(input: { name: $name }) {
      account {
        id
        name
      }
    }
  }
`;