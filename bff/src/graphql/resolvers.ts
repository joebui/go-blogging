import { articles } from "@resolvers/article.resolvers";
import { signUp, verifyJwt } from "@resolvers/user.resolvers";

export const resolvers = {
  Query: {
    articles,
  },
  Mutation: {
    signUp,
    verifyJwt,
  },
};
