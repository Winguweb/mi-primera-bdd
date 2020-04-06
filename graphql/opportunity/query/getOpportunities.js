import { gql } from "apollo-boost";

export const GET_OPPORTUNITIES= gql`
  query ($organization: ID!, $search: String)  {
    opportunities (where: { 
      organizacion: { id: $organization },
      name_contains: $search
    }) {
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