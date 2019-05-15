const dotenv = require( 'dotenv' );

dotenv.config();

module.exports = {
    'user': process.env.CONSTANT_NAME,
};