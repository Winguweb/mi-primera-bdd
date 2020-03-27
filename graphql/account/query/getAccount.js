import { gql } from "apollo-boost";

export const GET_ACCOUNT = gql`
  query Account($id: ID!) {
    account(id: $id) {
      id
      name
      account_type {
        name
      }
      email
      alternative_email
      address
      phone
      alt_phone
      web
      observations
    }

    accountTypes {
      id
      name
    }
  }
`;