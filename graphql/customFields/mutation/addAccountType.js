import { gql } from "apollo-boost";

export const ADD_ACCOUNT_TYPE = gql`
  mutation {
    createAccountType(input: { data: { name: "Tipo 1" } }) {
      accountType {
        name
      }
    }
  }
`;