import { gql } from "apollo-boost";

export const GET_OPPORTUNITY_FIELDS = gql`
  query {
    states {
      id
      Name
    } 
    opportunityTypes {
      id
      Name
    }

    accounts {
      id
      name
    }
  }
`;