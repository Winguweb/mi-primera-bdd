import { gql } from "apollo-boost";

export const CREATE_ACCOUNT = gql`
  mutation CreateAccount($name: String!, $address: String, $email: String, $alternative_email: String, $phone: Long, $alt_phone: Long, $web: String, $observations: String, $account_type: ID, $organization: ID!) {
    createAccount(input: { data: { 
      name: $name,
      address: $address,
      email: $email,
      alternative_email: $alternative_email,
      phone: $phone,
      alt_phone: $alt_phone,
      web: $web,
      observations: $observations,
      account_type: $account_type,
      organizacion: $organization
    }}) {
      account {
        id
        name
        organizacion {
          id
        }
      }
    }
  }
`;