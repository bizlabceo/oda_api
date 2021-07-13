import { gql } from "apollo-server";

export default gql`
  type User {
    id: Int!
    userName: String!
    email: String!
    password: String!
    phoneNumber:String!
    createdAt: String!
    updatedAt: String!
  }
`;
