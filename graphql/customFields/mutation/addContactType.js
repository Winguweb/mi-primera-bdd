import { gql } from "apollo-boost";

export const ADD_CONTACT_TYPE = gql`
  mutation {
    createContactType(input: { data: { name: "Tipo 1" } }) {
      contactType {
        name
      }
    }
  }
`;