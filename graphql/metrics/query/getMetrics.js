import { gql } from "apollo-boost";

export const GET_METRICS = gql`
  query {
    accounts {
      account_type {
        name
      }
      opportunities {
        name
      }
    }
    contacts {
      contact_type {
        Name
      }
    }
    
    opportunities {
      state {
        Name
      }
    }
  }
`;