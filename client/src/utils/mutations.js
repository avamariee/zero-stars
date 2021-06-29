import { gql } from '@apollo/react-hooks';

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
        email
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username

      }
    }
  }
`;

export const SAVE_FOOD = gql`
  mutation saveFood($input: foodInput!) {
    saveFood(input: $input) {
      _id
      username
      email
      savedFoods {
        FoodId
        authors
        image
        description
        title
      }
    }
  }
`;
