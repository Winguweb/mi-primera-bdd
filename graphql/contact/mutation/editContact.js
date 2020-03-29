import { gql } from "apollo-boost";

export const EDIT_CONTACT = gql`
  mutation UpdateContact($name: String!) {
    updateContact(input: { name: $name }) {
      contact {
        id
        identification
        name
        lastname
        charge
        occupation
        birth_date
        email
        alt_email
        phone
        cellphone
        subscribed
        observations
        volunteer
        account {
          name
        }
        origin {
          Name
        }
        contact_type {
          Name
        }
        gender
      }
    }
  }
`;