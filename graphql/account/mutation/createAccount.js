import { gql } from "apollo-boost";

export const CREATE_ACCOUNT = gql`
  mutation CreateAccount($name: String!, $organization: ID!) {
    createAccount(input: { data: { name: $name, organizacion: $organization} }) {
      account {
        id
        name
        organizacion {
          id
        }
      }
    }
  }
`;