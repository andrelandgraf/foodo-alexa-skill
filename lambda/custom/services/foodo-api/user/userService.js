const qs = require( 'qs' );

const { ENDPOINTS } = require('../api');
const { postAuthRequest } = require('../oAuthService');
const { getRequest } = require('../httpService');

const getAuthToken = handlerInput => handlerInput.requestEnvelope.context
    .System.user.accessToken;

/**
 * authenticate handles the login of a user via token retrieval
 * @param {*} data
 * @param {*} header
 * @returns {Object} user object
 */
const authenticate = ( data, header, handlerInput ) =>
    postAuthRequest( qs.stringify( data ), header, handlerInput )
        .then( ( res ) => res.data.user );

const getUser = handlerInput => getRequest(
    `${ ENDPOINTS.USER }${ ENDPOINTS.USER_ENDPOINTS.ME }`, handlerInput
    );

const isAuthenticated = handlerInput => !!handlerInput.requestEnvelope.context
    .System.user.accessToken;

module.exports = {
    getAuthToken,
    authenticate,
    getUser,
    isAuthenticated,
}