import { gql } from "apollo-boost";

export const DELETE_CONTACT_TYPE = gql`
  mutation DeleteContactType($id: ID!) {
    deleteContactType(input: { where: { id: $id } }) {
      contactType {
        Name
      }
    }
  }
`