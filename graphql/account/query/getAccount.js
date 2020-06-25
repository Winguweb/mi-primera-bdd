import { gql } from "apollo-boost";

export const GET_ACCOUNT = gql`
  query Account($id: ID!, $organization: ID!) {
    account(id: $id) {
      id
      name
      account_type {
        id
        name
      }
      email
      alternative_email
      address
      city
      zip_code
      province
      country
      phone
      alt_phone
      web
      observations
    }

    accountTypes(where: { organizacion: { id: $organization }}) {
      id
      name
    }

    contacts  (where: { 
      organizacion: { id: $organization }
    }) {
      id
      name
      lastname
      contact_type {
        name
      }
      email
      phone
      gender
      account {
        name
      }
    }
    
    opportunities (where: { 
      organizacion: { id: $organization }
    }) {
      id
      name
      state {
        name
      }
      opportunity_type {
        name
      }
      account {
        name
      }
      date
    }
  }
`;