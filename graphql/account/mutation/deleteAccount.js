import { gql } from "apollo-boost";

export const DELETE_ACCOUNT = gql`
  mutation DeleteAccount($id: ID!) {
    deleteAccount(input: { where: { id: $id } }) {
      account {
        id
        name
      }
    }
  }
`