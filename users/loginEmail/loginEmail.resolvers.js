import client from "../../client";
import bcrypt from "bcrypt";
import Jwt from "jsonwebtoken";

export default {
  Mutation: {
    loginEmail: async (_, { email, password }) => {
      const user = await client.user.findFirst({ where: { email } });
      if (!user) {
        return {
          ok: false,
          error: "user not found",
        };
      }

      const passwordOk = await bcrypt.compare(password, user.password);
      if (!passwordOk) {
        return {
          ok: false,
          error: "incorrect password",
        };
      }
      const token = await Jwt.sign({ id: user.id }, process.env.SECRET_KEY);
      return {
        ok: true,
        token,
      };
    },
  },
};
