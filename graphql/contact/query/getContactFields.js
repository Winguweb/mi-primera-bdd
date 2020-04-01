import { gql } from "apollo-boost";

export const GET_CONTACT_FIELDS = gql`
  query ContactFields {
    contactTypes {
      id
      Name
    }

    origins {
      id
      Name
    }

    accounts {
      id
      name
    }
  }
`;