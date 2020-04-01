import { gql } from "apollo-boost";

export const GET_METRICS = gql`
  query ($organization: ID!){
    accounts (where: { organizacion: { id: $organization }}) {
      account_type {
        name
      }
      opportunities {
        name
      }
    }
    contacts (where: { organizacion: { id: $organization }}) {
      contact_type {
        Name
      }
    }
    
    opportunities (where: { organizacion: { id: $organization }}) {
      state {
        Name
      }
    }
  }
`;