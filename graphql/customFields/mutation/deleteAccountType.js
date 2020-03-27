import { gql } from "apollo-boost";

export const DELETE_ACCOUNT_TYPE = gql`
  mutation DeleteAccountType($id: ID!) {
    deleteAccountType(input: { where: { id: $id } }) {
      accountType {
        name
      }
    }
  }
`