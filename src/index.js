import { ApolloServer, gql } from 'apollo-server';

const server = new ApolloServer({
  typeDefs: gql`
    type Query {
      id: ID
      name: String
      age: Int
    }
  `,
  resolvers: {
    Query: {
      id: () => 1,
      name: () => 'Murilo',
      age: () => 30,
    },
  },
});

server.listen(4007).then(({ url }) => {
  console.log(`Server listen on url ${url}`);
});
