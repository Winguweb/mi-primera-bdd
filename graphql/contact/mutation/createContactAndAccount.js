import { gql } from "apollo-boost";

export const CREATE_CONTACT_AND_ACCOUNT = gql`
  mutation CreateContactAndAccount($name: String!, $lastname: String!) {
    createContact(input: { data: { name: $name } }) {
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
    createAccount(input: { data: { name: $lastname } }) {
      account {
        id
        name
      }
    }
  }
`;