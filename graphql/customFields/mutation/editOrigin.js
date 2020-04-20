import { gql } from "apollo-boost";

export const EDIT_ORIGIN = gql`
  mutation EditOrigin($id: ID!, $name: String!) {
    updateOrigin(input: { 
      where: { id: $id },
      data: { name: $name }
    }) {
      origin {
        name
      }
    }
  }
`