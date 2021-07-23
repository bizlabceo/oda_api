import { gql } from "apollo-server";

export default gql`
  type LoginEmailResult {
    ok: Boolean!
    token: String
    error: String
  }
  type Mutation {
    loginEmail(email: String!, password: String!): LoginEmailResult!
  }
`;
