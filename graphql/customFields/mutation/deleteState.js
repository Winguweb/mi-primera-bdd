import { gql } from "apollo-boost";

export const DELETE_STATE = gql`
  mutation DeleteState($id: ID!) {
    deleteState(input: { where: { id: $id } }) {
      state {
        Name
      }
    }
  }
`