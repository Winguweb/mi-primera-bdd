import { gql } from "apollo-boost";

export const GET_ACCOUNT_FIELDS = gql`
  query ($organization: ID!){
    accountTypes(where: { organizacion: { id: $organization }}) {
      id
      name
    }
  }
`;