// Import all the data 
const regions = require('./database/regions.json');
const countries = require('./database/countries.json');
const states = require('./database/states.json');
const cities = require('./database/cities.json');

// Create a resolver object which has key-value pairs of operations
const resolvers = {
    Query: {
        // Get All Regions Data
        regions() {
            return regions;
        },
        // Get All Countries Data
        countries() {
            return countries;
        },
        // Get All States Data
        states() {
            return states;
        },
        // Get All Cities Data
        cities() {
            return cities;
        }
    }
};

module.exports = resolvers