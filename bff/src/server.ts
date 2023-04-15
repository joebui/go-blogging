import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import { resolvers } from "@graph/resolvers";
import { schema as typeDefs } from "@graph/schema";

const GRAPHQL_PATH = "/graphql";
const server = new ApolloServer({
  typeDefs,
  resolvers,
});

const start = async () => {
  await startStandaloneServer(server, {
    listen: { port: 5000, path: GRAPHQL_PATH },
  });
  console.log(`Server ready at: http://localhost:5000${GRAPHQL_PATH}`);
};

start().catch((err) => {
  const error = err as Error;
  console.error(error.name, error.message);
});
