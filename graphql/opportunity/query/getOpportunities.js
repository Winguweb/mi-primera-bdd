import { gql } from "apollo-boost";

export const GET_OPPORTUNITIES= gql`
  query ($organization: ID!, $search: String)  {
    opportunities (where: { 
      organizacion: { id: $organization },
      searchFields_contains: $search
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
      currency
      ammount
    }
  }
`;