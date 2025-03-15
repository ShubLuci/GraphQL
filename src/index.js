// Packages used to created the APOLLO SERVER
const { ApolloServer } = require('@apollo/server');
const { startStandaloneServer } = require('@apollo/server/standalone');


const typeDefs = require('../typeDefs');
const resolvers = require('../resolvers');

// IIFE to Initialize the APOLLO SERVER
(async () => {
    try {
        // Configure the apollo server with typeDefs and resolvers. Please mind the key names as it should be the same as mentioned below
        const server = new ApolloServer({
            // typeDefs - definitions of type of data (Eg: country) that we wanna make available on graph, from which user can then eventually query
            typeDefs,

            // resolvers - this has resolver functions which handles incoming requests on our data
            resolvers,
        });
        // Start the standalone server and return the url
        const { url } = await startStandaloneServer(server);
        console.log(`SUCCESS > src/index.js > APOLLO SERVER CREATED SUCCESSFULLY. YOU CAN ACCESS THE APOLLO UI VIA = ${url}`)
    } catch(err) {
        console.error(`ERROR > src/index.js > APOLLO SERVER CREATION FAILED WITH ERROR MESSAGE = ${err.message}`);
    }
})()