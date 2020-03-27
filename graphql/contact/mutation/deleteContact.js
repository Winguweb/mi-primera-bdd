import { gql } from "apollo-boost";

export const DELETE_CONTACT = gql`
  deleteAccount(input: { where: { id: ID! } }) {
    contact {
      id
      name
      lastname
    }
  }
`