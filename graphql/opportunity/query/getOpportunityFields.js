import { gql } from "apollo-boost";

export const GET_OPPORTUNITY_FIELDS = gql`
  query ($organization: ID!)  {
    states (where: { organizacion: { id: $organization } }) {
      id
      name
    } 
    opportunityTypes (where: { organizacion: { id: $organization }}) {
      id
      name
    }

    accounts (where: { organizacion: { id: $organization }}) {
      id
      name
    }
  }
`;