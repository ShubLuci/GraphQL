// Import all the data 
const regionsData = require('./database/regions.json');
const countriesData = require('./database/countries.json');
const statesData = require('./database/states.json');
const citiesData = require('./database/cities.json');

// Create a resolver object which has key-value pairs of operations
const resolvers = {
    Query: {
        // Get All Regions Data
        regions() {
            return regionsData;
        },
        // Get Specific Region Data
        region(parent,args) {
            return regionsData.find((data) => data.name === args.region_name)
        },
        // Get All Countries Data
        countries() {
            return countriesData;
        },
        // Get Specific Country Data
        country(parent,args) {
            return countriesData.find((data) => data.name === args.country_name);
        },
        // Get All States Data
        states() {
            return statesData;
        },
        // Get Specific State Data
        state(parent,args) {
            return statesData.find((data) => data.name === args.state_name);
        },
        // Get All Cities Data
        cities() {
            return citiesData;
        },
        // Get Specific City Data
        city(parent,args) {
            return citiesData.find((data) => data.name === args.city_name)
        }
    }
};

module.exports = resolvers