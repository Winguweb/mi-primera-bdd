import { gql } from "apollo-boost";

export const GET_CONTACTS = gql`
  query {
    contacts {
      id
      name
      lastname
      contact_type {
        Name
      }
      email
      phone
      gender
      account {
        name
      }
    }
  }
`;