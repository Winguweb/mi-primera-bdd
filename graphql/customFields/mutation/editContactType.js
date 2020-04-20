import { gql } from "apollo-boost";

export const EDIT_CONTACT_TYPE = gql`
  mutation EditContactType($id: ID!, $name: String!) {
    updateContactType(input: { 
      where: { id: $id },
      data: { name: $name }
    }) {
      contactType {
        name
      }
    }
  }
`