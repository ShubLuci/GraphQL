const { games, authors, reviews } = require('../database/db');

const resolvers = {
    Query: {
        // Resolver for a single game by id
        game(_, args) {
            return games.find((game) => game.id == args.id);
        },
        
        // Resolver for all games
        games() {
            return games;
        },

        // Resolver for a single review by id
        review(_, args) {
            return reviews.find((review) => review.id == args.id);
        },

        // Resolver for all reviews
        reviews() {
            return reviews;
        },

        // Resolver for a single author by id
        author(_, args) {
            return authors.find((author) => author.id == args.id);
        },

        // Resolver for all authors
        authors() {
            return authors;
        }
    },

    // Resolving the relationships between Review, Game, and Author

    Game: {
        reviews(parent) {
            // Filter reviews for the current game
            return reviews.filter((review) => review.game_id == parent.id);
        }
    },

    Review: {
        game(parent) {
            // Return the game associated with the review
            return games.find((game) => game.id == parent.game_id);
        },
        
        author(parent) {
            // Return the author associated with the review
            return authors.find((author) => author.id == parent.author_id);
        }
    },

    Author: {
        reviews(parent) {
            // Return all reviews written by this author
            return reviews.filter((review) => review.author_id == parent.id);
        }
    }
};

module.exports = { resolvers };
