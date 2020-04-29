import { gql } from "apollo-boost";

export const GET_ACCOUNT_FIELDS = gql`
  query ($organization: ID!){
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