import { gql } from "apollo-boost";

export const GET_OPPORTUNITIES= gql`
  query ($organization: ID!)  {
    opportunities (where: { organizacion: { id: $organization }}) {
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