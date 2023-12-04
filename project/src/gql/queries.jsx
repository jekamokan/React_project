import { gql } from "@apollo/client";

export const GET_TOKEN = gql`
  query getToken($login: String!, $password: String!) {
    login(login: $login, password:  $password)
  }
`;
    

export const GET_GOODS = gql`
    query getGoods($query: String!) {
      GoodFind(query: $query) {
        _id
        name
        description
        price
        images {
          url
        }
        categories {
          _id
          createdAt
          name
        }
      }
    }
  `;

  export const GET_CATEGORIES = gql`
  query getCategories($query: String!) {
    CategoryFind(query: $query) {
      _id
      name
    }
  }
`;
  export const GET_ORDERS = gql`
  query getOrders($query: String!) {
    OrderFind(query: $query) {
      _id
      createdAt
      total
      orderGoods {
        _id
        createdAt
        price
        count
        goodName
        total
      }
    }
  }
`;


