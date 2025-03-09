const typeDefs = `#graphql
    type Game {
        id: ID!
        title: String!
        platform: [String!]!
    }

    type Review {
        id: ID!
        rating: Int!
        content: String!
    }

    type Author {
        id: ID!
        name: String!
        verified: Boolean!
    }

    type Query {
        review: [Review]
        # Pass id in the new key via query variables.
        reviews(id: ID!): Review
        game: [Game]
        games(id: ID!): Game
        author: [Author]
        authors(id: ID!): Author

    }
`;


module.exports = {typeDefs};