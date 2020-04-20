import { gql } from "apollo-boost";

export const GET_OPPORTUNITY = gql`
  query Opportunity($id: ID!, $organization: ID!) {
    opportunity(id: $id) {
      id
      name
      date
      ammount
      currency
      observations
      state {
        id
        name
      }
      opportunity_type {
        id
        name
      }
      account {
        id
        name
      }
    }

    states (where: { organizacion: { id: $organization }}) {
      id
      name
    } 
    
    opportunityTypes (where: { organizacion: { id: $organization }}) {
      id
      name
    }

    accounts (where: { organizacion: { id: $organization }}) {
      id
      name
    }
  }
`;