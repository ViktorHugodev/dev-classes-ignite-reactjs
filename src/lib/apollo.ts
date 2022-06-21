import { ApolloClient, InMemoryCache } from "@apollo/client";

export const apolloClient = new ApolloClient({
  uri: 'https://api-sa-east-1.graphcms.com/v2/cl4o3j5m70dci01xi32bq39ef/master',
  cache: new InMemoryCache()
})