import { gql } from "apollo-boost";

export const GET_CONTACT = gql`
  query Contact($id: ID!) {
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

    contactTypes {
      id
      Name
    }

    origins {
      id
      Name
    }

    accounts {
      id
      name
    }
  }
`;