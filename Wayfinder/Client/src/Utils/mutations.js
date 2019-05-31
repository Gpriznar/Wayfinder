import gql from 'graphql-tag';

export const LOGIN = gql`
mutation login($username: String, $password: String){
  login(username: $username, password: $password) {
    token
    error
    success
    userId
    message
  }
}
`;

export const ADD_WEBSITE = gql`
mutation createWebsite($name: String!, $url: String!){
  createWebsite(name: $name, url: $url) {
    name,
    url
  }
}
`;
