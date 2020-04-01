import { gql } from "apollo-boost";

export const ACCEPT_TERMS = gql`
  mutation Terms($id: ID!, $acceptedTerms: Boolean) {
    updateUser(input: { where: { id: $id }, data: { acceptedTerms: $acceptedTerms } }) {
      user {
        id
        acceptedTerms
      }
    }
  }
`;