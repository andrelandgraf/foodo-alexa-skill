const dotenv = require( 'dotenv' );

dotenv.config();

// use those constants to access .env variables
module.exports = {
    BACKEND_API: process.env.BACKEND_API,
};
