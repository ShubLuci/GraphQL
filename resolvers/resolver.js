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
        },
        games(_,args) {
            return games.find((data) => data.id == args.id)
        },
        authors(_,args) {
            return authors.find((data) => data.id == args.id)
        }
    }
}


module.exports = {resolvers}