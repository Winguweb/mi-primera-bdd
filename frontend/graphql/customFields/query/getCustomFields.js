import { gql } from "apollo-boost";

export const GET_CUSTOM_FIELDS = gql`
  query {
    contactTypes {
      id
      Name
    }
    origins {
      id
      Name
    }
    accountTypes {
      id
      name
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