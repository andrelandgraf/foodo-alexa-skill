const dotenv = require( 'dotenv' );

dotenv.config();

module.exports = {
    BACKEND_API: process.env.BACKEND_API,
};
