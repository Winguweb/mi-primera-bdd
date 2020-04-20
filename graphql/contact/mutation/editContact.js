import { gql } from "apollo-boost";

export const EDIT_CONTACT = gql`
  mutation UpdateContact(
    $name: String!, 
    $lastname: String,
    $identification: Long,
    $charge: String,
    $occupation: String,
    $birth_date: Date,
    $email: String,
    $alt_email: String,
    $phone: Long,
    $cellphone: Long,
    $subscribed: Boolean,
    $observations: String,
    $volunteer: Boolean,
    $account: ID,
    $origin: ID,
    $contact_type: ID,
    $gender: ENUM_CONTACT_GENDER,
    $organization: ID!
  ) {
    updateContact(input: { data: { 
      name: $name, 
      lastname: $lastname,
      identification: $identification,
      charge: $charge,
      occupation: $occupation,
      birth_date: $birth_date,
      email: $email,
      alt_email: $alt_email,
      phone: $phone,
      cellphone: $cellphone,
      subscribed: $subscribed,
      observations: $observations,
      volunteer: $volunteer,
      account: $account,
      origin: $origin,
      contact_type: $contact_type,
      gender: $gender,
      organizacion: $organization
    } }) {
      contact {
        id
        identification
        name
        lastname
        charge
        occupation
        birth_date
        email
        alt_email
        phone
        cellphone
        subscribed
        observations
        volunteer
        account {
          name
          id
        }
        origin {
          name
          id
        }
        contact_type {
          name
          id
        }
        gender
      }
    }
  }
`;