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
        Name
      }
      opportunity_type {
        id
        Name
      }
      account {
        id
        name
      }
    }

    states (where: { organizacion: { id: $organization }}) {
      id
      Name
    } 
    
    opportunityTypes (where: { organizacion: { id: $organization }}) {
      id
      Name
    }

    accounts (where: { organizacion: { id: $organization }}) {
      id
      name
    }
  }
`;