import { gql } from "apollo-boost";

export const DELETE_ACCOUNT = gql`
  deleteAccount(input: { where: { id: ID! } }) {
    account {
      id
      name
    }
  }
`