import { ApolloServer, gql } from 'apollo-server';

const server = new ApolloServer({
  typeDefs: gql`
    type Query {
      id: ID
      name: String
      age: Int
      average: Float
      boo: Boolean!
      arrayString: [String]
    }
  `,
  resolvers: {
    Query: {
      id: () => 1,
      name: () => 'Murilo',
      age: () => 30,
      average: () => 50.55,
      boo: () => true,
      arrayString: () => ['A', 'B'],
    },
  },
});

server.listen(4007).then(({ url }) => {
  console.log(`Server listen on url ${url}`);
});
