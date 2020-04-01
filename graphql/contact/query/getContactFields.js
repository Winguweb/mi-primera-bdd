import { gql } from "apollo-boost";

export const GET_CONTACT_FIELDS = gql`
  query ContactFields($organization: ID!) {
    contactTypes (where: { organizacion: { id: $organization }}) {
      id
      Name
    }

    origins (where: { organizacion: { id: $organization }}) {
      id
      Name
    }

    accounts (where: { organizacion: { id: $organization }}) {
      id
      name
    }
  }
`;