export const schema = `#graphql
  type Article {
    id: ID!
    title: String!
    subtitle: String
    content: String
    authorId: ID!
    createdAt: Date!
    updatedAt: Date!
  }

  type Query {
    articles(page: Int!, limit: Int!): [Article!]!
  }

  scalar Date
`;
