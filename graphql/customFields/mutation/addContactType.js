import { gql } from "apollo-boost";

export const ADD_CONTACT_TYPE = gql`
  mutation CreateContactType($name: String!, $organization: ID!){
    createContactType(input: { data: { name: $name, organizacion: $organization } }) {
      contactType {
        name
      }
    }
  }
`;