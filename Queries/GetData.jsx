import { gql } from "@apollo/client";

//CRUD operations
const GET_USERS = gql`
  query GetUsers {
    users {
      id
      banner
      propic
      username
      email
      password
      city
      dateOfBirth
      bio
    }
  }
`;

const ADD_USER = gql`
  mutation AddUser($username: String!, $email: String!, $password: String!, $city: String!, $dateOfBirth: String!, $bio: String!, ) {
    addUser(username: $username, email: $email, password: $password, city: $city, dateOfBirth: $dateOfBirth, bio: $bio) {
      id
      username
      email
      city
      dateOfBirth
      bio
    }
  }
`;

const UPDATE_USER = gql`
  mutation UpdateUser($id: ID!, $username: String, $email: String, $password: String, $city: String, $dateOfBirth: String, $bio: String) {
    updateUser(id: $id, username: $username, email: $email, password: $password, city: $city, dateOfBirth: $dateOfBirth, bio: $bio) {
      id
      username
      email
      city
      dateOfBirth
      bio
    }
  }
`;

const DELETE_USER = gql`
  mutation DeleteUser($id: ID!) {
    deleteUser(id: $id) {
      id
      username
      email
      city
      dateOfBirth
      bio
    }
  }
`;


export {GET_USERS,UPDATE_USER, DELETE_USER,ADD_USER}