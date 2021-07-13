import { gql } from "apollo-server";

export default gql`
  type CreateAccountResult {
    ok: Boolean!
    error: String
  }
  type Mutation {
    createAccount(
      userName: String!
      email: String!
      password: String!
      phoneNumber:String!
    ): CreateAccountResult!
  }
`;
