import { gql } from "apollo-boost";

export const ADD_STATE = gql`
  mutation {
    createState(input: { data: { name: "Tipo 1" } }) {
      state {
        name
      }
    }
  }
`;