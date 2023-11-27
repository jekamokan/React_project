import { gql } from "@apollo/client";

export const CREATE_NEW_USER = gql`
mutation UserUpsert($user: UserInput) {
  UserUpsert(user: $user) {
    _id
    createdAt
    login
    nick
  }
}
`;

export const ADD_ORDER_IN_USER = gql`
mutation newOrder($goods: [OrderGoodInput]) {
  OrderUpsert(order: {orderGoods: $goods}) {
    _id
    createdAt
    total
    orderGoods {
      _id
      createdAt
      price
      count
      goodName
      good{
        _id
        name
      }
      order{
        _id
      }
      owner{
        _id
        login
      }
      total
    }
  }
}
`;
