import { gql } from "apollo-boost";

export const ADD_ORIGIN = gql`
  mutation CreateOrigin($name: String!, $organization: ID!) {
    createOrigin(input: { data: { Name: $name, organizacion: $organization } }) {
      origin {
        Name
      }
    }
  }
`;