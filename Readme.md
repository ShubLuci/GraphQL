1. Data Extracted From: https://github.com/dr5hn/countries-states-cities-database/tree/master/json

2. To Run the Server Execute Below Commands in Terminal

    npm install

    npm run dev

3. Testing Query Varaible Sections with Examples

query ExampleQuery {
  region(region_name: "Asia") {
    id,
    name
  }
  country(country_name: "India") {
    iso2,
    name,
    capital,
    region
  },
  state(state_name: "Maharashtra") {
    state_code,
    name,
    country_name,
  },
  city(city_name: "Hyderabad") {
    id,
    name,
    country_name,
    state_name
  }
}

4. Testing Nested Related Data with Examples

query GetAllCityData {
  city(city_name: "Pune") {
    id,
    name,
    state {
      state_code,
      name,
      country {
        iso2,
        name,
        region {
          id,
          name
        }
      }
    }
  }
}
