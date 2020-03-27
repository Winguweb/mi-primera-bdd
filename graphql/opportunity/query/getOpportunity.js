import { gql } from "apollo-boost";

export const GET_OPPORTUNITY = gql`
  query Opportunity($id: ID!) {
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

    states {
      id
      Name
    } 
    
    opportunityTypes {
      id
      Name
    }
  }
`;