import { gql } from "apollo-boost";

export const GET_METRICS = gql`
  query ($organization: ID!){
    accounts (where: { organizacion: { id: $organization }}) {
      account_type {
        name
      }
      opportunities {
        name
        date
      }
    }
    contacts (where: { organizacion: { id: $organization }}) {
      contact_type {
        name
      }
    }
    
    opportunities (where: { organizacion: { id: $organization }}) {
      state {
        name
      }
      ammount
      currency
    }
  }
`;