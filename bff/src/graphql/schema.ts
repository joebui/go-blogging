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

  type Mutation {
    signUp(data: SignUpRequest!): SignUpResponse!
    verifyJwt(data: VerifyJwtRequest!): VerifyJwtResponse!
  }

  type SignUpResponse {
    token: String!
    expiresIn: Int!
  }

  type VerifyJwtResponse {
    userId: String!
  }

  input SignUpRequest {
    username: String!
    email: String!
    password: String!
  }

  input VerifyJwtRequest {
    token: String!
  }

  scalar Date
`;
