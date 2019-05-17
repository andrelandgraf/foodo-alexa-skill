const dotenv = require( 'dotenv' );

dotenv.config();

module.exports = {
    'envvar': process.env.CONSTANT_NAME,
};