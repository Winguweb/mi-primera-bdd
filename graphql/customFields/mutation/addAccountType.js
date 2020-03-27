import { gql } from "apollo-boost";

export const ADD_ACCOUNT_TYPE = gql`
  mutation CreateAccountType($name: String!){
    createAccountType(input: { data: { name: $name } }) {
      accountType {
        name
      }
    }
  }
`;