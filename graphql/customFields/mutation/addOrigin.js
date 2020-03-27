import { gql } from "apollo-boost";

export const ADD_ORIGIN = gql`
  mutation CreateOrigin($name: String!) {
    createOrigin(input: { data: { Name: $name } }) {
      origin {
        Name
      }
    }
  }
`;