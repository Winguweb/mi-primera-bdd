import { gql } from "apollo-boost";

export const EDIT_STATE = gql`
  mutation EditState($id: ID!, $name: String!) {
    updateState(input: { 
      where: { id: $id },
      data: { name: $name }
    }) {
      state {
        name
      }
    }
  }
`