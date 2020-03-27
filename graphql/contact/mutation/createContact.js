import { gql } from "apollo-boost";

export const CREATE_CONTACT = gql`
  mutation createContact($input: createContactInput) {
    createContact(input: $input) {
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
`;