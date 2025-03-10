const typeDefs = `#graphql
    type Game {
        id: ID!
        title: String!
        platform: [String!]!
        reviews: [Review!]!  # Ensuring each game can have related reviews
    }

    type Review {
        id: ID!
        rating: Int!
        content: String!
        game: Game    # Linking review to the game it belongs to
        author: Author # Linking review to its author
    }

    type Author {
        id: ID!
        name: String!
        verified: Boolean!
        reviews: [Review!]!  # Ensuring each author can have multiple reviews
    }

    type Query {
        review(id: ID!): Review        # Fetch a single review by ID
        reviews: [Review!]             # Fetch all reviews
        game(id: ID!): Game            # Fetch a single game by ID
        games: [Game!]                 # Fetch multiple games
        author(id: ID!): Author        # Fetch a single author by ID
        authors: [Author!]             # Fetch multiple authors
    }
`;

module.exports = { typeDefs };
