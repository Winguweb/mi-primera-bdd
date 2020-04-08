import { gql } from "apollo-boost";

export const EDIT_ACCOUNT_TYPE = gql`
  mutation EditAccountType($id: ID!, $name: String!) {
    updateAccountType(input: { 
      where: { id: $id },
      data: { name: $name }
    }) {
      accountType {
        name
      }
    }
  }
`