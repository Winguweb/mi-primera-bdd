import { gql } from "apollo-boost";

export const DELETE_ORIGIN = gql`
  mutation DeleteOrigin($id: ID!) {
    deleteOrigin(input: { where: { id: $id } }) {
      origin {
        Name
      }
    }
  }
`