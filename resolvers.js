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
        // Get Specific Region Data (using arguments passed in GraphQL query)
        region(parent,args) {
            return regionsData.find((data) => data.name === args.region_name)
        },
        // Get All Countries Data
        countries() {
            return countriesData;
        },
        // Get Specific Country Data (using arguments passed in GraphQL query)
        country(parent,args) {
            return countriesData.find((data) => data.name === args.country_name);
        },
        // Get All States Data
        states() {
            return statesData;
        },
        // Get Specific State Data (using arguments passed in GraphQL query)
        state(parent,args) {
            return statesData.find((data) => data.name === args.state_name);
        },
        // Get All Cities Data
        cities() {
            return citiesData;
        },
        // Get Specific City Data (using arguments passed in GraphQL query)
        city(parent,args) {
            return citiesData.find((data) => data.name === args.city_name)
        }
    },

    // Related Data Regions <-> Country (using parent data from the top level object)
    Region: {
        country(parent,args) {
            return countriesData.filter((data) => {
                return data.region_id === parent.id
            });
        }
    },

    // Related Data Country <-> Regions (using parent data from the top level object)
    Country: {
        region(parent,args) {
            return regionsData.find((data) => data.id === parent.region_id)
        }
    },

    // Related Data State <-> Country (using parent data from the top level object)
    State: {
        country(parent,args) {
            return countriesData.find((data) => data.iso2 === parent.country_code)
        }
    },

    // Realted Data City <-> State (using parent data from the top level object)
    City: {
        state(parent,args) {
            return statesData.find((data) => data.state_code === parent.state_code);
        }
    }
};

module.exports = resolvers