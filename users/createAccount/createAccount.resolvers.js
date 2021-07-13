import { prisma } from "@prisma/client";
import bcrypt from "bcrypt";
import client from "../../client";

export default {
  Mutation: {
    createAccount: async (_, { userName, email, password, phoneNumber }) => {
      try {
        const existingUser = await client.user.findFirst({
          where: {
            OR: [
              {
                userName,
              },
              {
                email,
              },
              {
                phoneNumber,
              },
            ],
          },
        });
        console.log(existingUser);
        if (existingUser) {
          throw new Error("This Username/Email is already taken.");
        }

        const hashPassword = await bcrypt.hash(password, 10);
        await client.user.create({
          data: {
            userName,
            email,
            phoneNumber,
            password: hashPassword,
          },
        });
      } catch (e) {
        return {
          ok: false,
          error: e.message,
        };
      }
    },
  },
};
