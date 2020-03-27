import { gql } from "apollo-boost";

export const GET_ACCOUNT_FIELDS = gql`
  query {
    accountTypes {
      id
      name
    }
  }
`;