import { gql } from "apollo-boost";

export const ADD_ACCOUNT_TYPE = gql`
  mutation CreateAccountType($name: String!, $organization: ID!){
    createAccountType(input: { data: { name: $name, organizacion: $organization } }) {
      accountType {
        name
        organizacion {
          id
        }
      }
    }
  }
`;