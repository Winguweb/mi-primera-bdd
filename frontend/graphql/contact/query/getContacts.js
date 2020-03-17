import { gql } from "apollo-boost";

export const GET_CONTACTS = gql`
  query {
    contacts {
      id
      name
      lastname
      contact_type
      email
      phone
      gender
      account
    }
  }
`;