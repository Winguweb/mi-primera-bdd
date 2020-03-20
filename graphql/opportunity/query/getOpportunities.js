import { gql } from "apollo-boost";

export const GET_OPPORTUNITIES= gql`
  query {
    opportunities {
      id
      name
      state {
        Name
      }
      opportunity_type {
        Name
      }
      account {
        name
      }
      date
    }
  }
`;