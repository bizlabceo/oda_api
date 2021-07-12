import bcrypt from "bcrypt";
import client from "../../client";

export default {
  Mutation: {
    createAccount: async (
      _,
      { fristName, lastName, userName, email, password }
    ) => {},
  },
};
