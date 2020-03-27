import { gql } from "apollo-boost";

export const ADD_STATE = gql`
  mutation CreateState($name: String!) {
    createState(input: { data: { Name: $name } }) {
      state {
        Name
      }
    }
  }
`;