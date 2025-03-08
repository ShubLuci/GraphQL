// Package to create and configure the apollo server and start a standalone server
const { ApolloServer } = require('@apollo/server');
const { startStandaloneServer } = require('@apollo/server/standalone');

// typeDefs for Schema
const {typeDefs} = require('../schema/schema');

// resolvers for Schema
const {resolvers} = require('../resolvers/resolver');

// Configure the env variables
require('dotenv').config();


// Get the port
const APOLLO_PORT = process.env.APOLLO_PORT;

// IIFE for Apollo Server Setup
(
   async () => {
        try {
            // Configure the apollo server with typeDefs and resolvers. Please mind the key names as it should be the same as mentioned below
            const apolloServer = new ApolloServer({
                // typeDefs - definitions of type of data (Eg: game) that we wanna make available on graph, from which user can then eventually query
                typeDefs,
                // resolvers - has resolver functions which handles incoming requests on our data
                resolvers
            });
            
            // Start the standalone server and return the url
            const {url} = await startStandaloneServer(apolloServer, {
                listen: {
                    port: APOLLO_PORT
                }
            });
            console.log(`SUCCESS > src/index.js > Apollo Server Running At Port ${APOLLO_PORT}. Use this url to access the standalone server = ${url}`)
        } catch(err) {
            console.error(`ERROR > src/index.js > APOLLO SERVER CREATION FAILED AT ${APOLLO_PORT} with error message = ${err.message}`);
        }
    }
)();