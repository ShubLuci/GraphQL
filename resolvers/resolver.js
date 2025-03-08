const {games,authors,reviews} = require('../database/db');

const resolvers = {
    Query: {
        game() {
            return games;
        },
        author() {
            return authors;
        },
        review() {
            return reviews;
        }
    }
}


module.exports = {resolvers}