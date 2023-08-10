import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri: "https://en.martatorre.dev/graphql",
  cache: new InMemoryCache(),
});
