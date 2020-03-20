import { gql } from "apollo-boost";

export const ADD_ORIGIN = gql`
  mutation {
    createOrigin(input: { data: { name: "Tipo 1" } }) {
      origin {
        name
      }
    }
  }
`;