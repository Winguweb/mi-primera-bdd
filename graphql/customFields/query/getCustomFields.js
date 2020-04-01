import { gql } from "apollo-boost";

export const GET_CUSTOM_FIELDS = gql`
  query ($organization: ID!) {
    contactTypes (where: { organizacion: { id: $organization }}) {
      id
      Name
    }
    origins (where: { organizacion: { id: $organization }}) {
      id
      Name
    }
    accountTypes (where: { organizacion: { id: $organization }}) {
      id
      name
    }
    states  (where: { organizacion: { id: $organization }}) {
      id
      Name
    } 
    opportunityTypes (where: { organizacion: { id: $organization }}) {
      id
      Name
    }
  }
`;