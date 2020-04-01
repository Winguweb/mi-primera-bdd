import { gql } from "apollo-boost";

export const GET_ACCOUNTS = gql`
  query ($organization: ID!){
    accounts(where: { organizacion: { id: $organization }}) {
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