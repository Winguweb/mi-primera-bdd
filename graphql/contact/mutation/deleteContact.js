import { gql } from "apollo-boost";

export const DELETE_CONTACT = gql`
  mutation DeleteContact($id: ID!) {
    deleteContact(input: { where: { id: $id } }) {
      contact {
        id
        name
        lastname
      }
    }
  }
`