import { gql } from "apollo-boost";

export const GET_ACCOUNTS = gql`
  query {
    accounts {
      id
      name
      account_type {
        name
      }
      email
      phone
    }
  }
`;