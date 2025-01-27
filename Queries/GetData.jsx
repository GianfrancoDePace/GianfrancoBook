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
const GET_POSTS = gql`
query GetPosts {
  posts  {
    id
    content
    author {
      id
      username
    }

  }
}
`
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

const ADD_POST = gql`
  mutation AddPost($content: String!, $authorId: ID!) {
    addPost(content: $content, authorId: $authorId) {
      id
      content
      author {
        id
        username
      }
      createdAt
    }
  }
`;

export { GET_USERS, GET_POSTS, UPDATE_USER, DELETE_USER, ADD_USER, ADD_POST }