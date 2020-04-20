import { gql } from "apollo-boost";

export const GET_CONTACT = gql`
  query Contact($id: ID!, $organization: ID!) {
    contact(id: $id) {
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
        id
        name
      }
      origin {
        id
        Name
      }
      contact_type {
        id
        Name
      }
      gender
    }

    contactTypes (where: { organizacion: { id: $organization }}) {
      id
      Name
    }

    origins (where: { organizacion: { id: $organization }}) {
      id
      Name
    }

    accounts (where: { organizacion: { id: $organization }}) {
      id
      name
    }
  }
`;