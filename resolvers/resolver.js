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
        },

        // handle query variables
        reviews(_,args) {
            return reviews.find((data) => data.id == args.id)
        }
    }
}


module.exports = {resolvers}