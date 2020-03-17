import { gql } from "apollo-boost";

export const GET_OPPORTUNITIES= gql`
  query {
    opportunities {
      id
      name
      state
      opportunity_type
      account
      date
  }
`;