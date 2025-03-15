const typeDefs = `#graphql
    
    #Defining schema for Region table
    type Region {
        id: ID!,
        name: String
    }

    #Defining schema for Country table
    type Country {
        id: ID!,
        name: String,
        iso3: String,
        iso2: String,
        numeric_code: String
        phonecode: String
        capital: String,
        currency: String,
        currency_name: String,
        currency_symbol: String,
        tld: String,
        native: String
        region: String,
        region_id: Int,
        subregion: String,
        subregion_id: Int,
        nationality: String,
        latitude: String,
        longitude: String
    }

    #Defining schema for State table
    type State {
        id: ID!,
        name: String,
        country_id: Int,
        country_code: String,
        country_name: String,
        state_code: String,
        type: String,
        latitude: String,
        longitude: String
    }

    #Defining schema for City table
    type City {
        id: ID!,
        name: String,
        state_id: Int,
        state_code: String,
        state_name: String,
        country_id: Int,
        country_code: String,
        country_name: String,
        latitude: String,
        longitude: String,
        wikiDataId: String
    }

    # Define the Query object and keys that will be used as Object and function names in resolvers file.
    type Query {
        # Define the return data type for regions function
        regions: [Region],
        # Define the return data type for countries function
        countries: [Country],
        # Define the return data type for states function
        states: [State],
        # Define the return data type for cities function
        cities: [City]
    }
`;

module.exports = typeDefs;