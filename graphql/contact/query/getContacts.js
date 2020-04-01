import { gql } from "apollo-boost";

export const GET_CONTACTS = gql`
  query ($organization: ID!) {
    contacts  (where: { organizacion: { id: $organization }}) {
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