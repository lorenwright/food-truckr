import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import csv from 'csvtojson';
// A schema is a collection of type definitions (hence "typeDefs")
// that together define the "shape" of queries that are executed against
// your data.
const typeDefs = `#graphql
# Comments in GraphQL strings (such as this one) start with the hash (#) symbol.

# This "Vendor" type defines the queryable fields for every vendor in our data source.
type Vendor {
    locationid: String,
    Applicant: String,
    Latitude: String,
    Longitude: String,
    Address: String,
    FoodItems: String,
    Status: String
}

# The "Query" type is special: it lists all of the available queries that
# clients can execute, along with the return type for each. In this
# case, the "vendors" query returns an array of zero or more Vendors (defined above).
type Query {
    vendors: [Vendor]
}
`;
const vendors = await csv().fromFile('./src/vendors.csv');
// Resolvers define how to fetch the types defined in your schema.
// This resolver retrieves vendors from the "vendors" array above.
const resolvers = {
    Query: {
        vendors: () => vendors,
    },
};
// The ApolloServer constructor requires two parameters: your schema
// definition and your set of resolvers.
const server = new ApolloServer({
    typeDefs,
    resolvers,
});
// Passing an ApolloServer instance to the `startStandaloneServer` function:
//  1. creates an Express app
//  2. installs your ApolloServer instance as middleware
//  3. prepares your app to handle incoming requests
const { url } = await startStandaloneServer(server, {
    listen: { port: 4000 },
});
console.log(`🚀  Server ready at: ${url}`);
