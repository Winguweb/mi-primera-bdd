import { gql } from "apollo-boost";

export const GET_CONTACTS = gql`
  query ($organization: ID!, $search: String) {
    contacts  (where: { 
      organizacion: { id: $organization },
      name_contains: $search
    }) {
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