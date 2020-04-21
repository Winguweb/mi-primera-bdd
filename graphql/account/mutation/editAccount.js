import { gql } from "apollo-boost";

export const EDIT_ACCOUNT = gql`
  mutation UpdateAccount(
    $name: String!,
    $address: String,
    $city: String,
    $zip_code: String,
    $province: String,
    $country: String,
    $email: String,
    $alternative_email: String,
    $phone: Long,
    $alt_phone: Long,
    $web: String,
    $observations: String,
    $account_type: ID,
    $organization: ID!) {
    updateAccount(input: { data:  { 
      name: $name,
      address: $address,
      city: $city,
      zip_code: $zip_code,
      province: $province,
      country: $country,
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
      }
    }
  }
`;