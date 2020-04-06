import { gql } from "apollo-boost";

export const GET_ACCOUNTS = gql`
  query ($organization: ID!, $search: String){
    accounts(where: { 
      organizacion: { id: $organization },
      name_contains: $search
    }) {
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