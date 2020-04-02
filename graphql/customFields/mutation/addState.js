import { gql } from "apollo-boost";

export const ADD_STATE = gql`
  mutation CreateState($name: String!, $organization: ID!) {
    createState(input: { data: { Name: $name, organizacion: $organization } }) {
      state {
        Name
      }
    }
  }
`;