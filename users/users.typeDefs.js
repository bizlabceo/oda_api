import { gql } from "apollo-server";

export default gql`
  type User {
    id: Int!
    userName: String!
    email: String!
    password: String!
    phoneNumber: String!
    member_Classification: String
    business_Number: String
    business_Type: String
    membership_Grade: String
    member_Role: String
    avatar: String
    createdAt: String!
    updatedAt: String!
  }
`;
