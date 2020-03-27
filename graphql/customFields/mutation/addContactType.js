import { gql } from "apollo-boost";

export const ADD_CONTACT_TYPE = gql`
  mutation CreateContactType($name: String!){
    createContactType(input: { data: { Name: $name } }) {
      contactType {
        Name
      }
    }
  }
`;