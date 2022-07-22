import { ApolloServer } from 'apollo-server';
import { context } from './graphql/context';
import { resolvers, typeDefs } from './graphql/schema';

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: context,
});

server.listen(4007).then(({ url }) => {
  console.log(`Server listen on url ${url}`);
});
