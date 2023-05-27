import { ApolloClient, InMemoryCache } from "@apollo/client";


const client = new ApolloClient({
    uri: "https://nextblog.havenwork.com/graphql",
    cache: new InMemoryCache(),
});

export default client;