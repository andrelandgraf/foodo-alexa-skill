const axios = require( 'axios' );

const { API, ENDPOINTS } = require( './api' );
const { getStoredRefreshToken, getStoredAuthToken, authenticate } = require( './user/userService' );

const GRANT_TYPES = {
    AUTH_CODE: 'authorization_code',
    REFRESH_TOKEN: 'refresh_token',
    PASSWORD: 'password',
};

/**
 * getTokenHeaders returns the required headers for the authentication request
 * @param {string} clientID
 * @param {string} clientSecret
 */
const getTokenHeaders = ( clientID, clientSecret ) => {
    if ( !clientID || !clientSecret ) {
        throw Error( 'oauth credientiels undefined' );
    }
    const credentials = Buffer.from( `${ clientID }:${ clientSecret }` ).toString( 'base64' );
    return {
        'Content-Type': 'application/x-www-form-urlencoded',
        Authorization: `Basic ${ credentials }`,
    };
};

/**
 * getCodeHeaders returns the required headers for the authorization request
 */
const getCodeHeaders = () => ( {
    'Content-Type': 'application/x-www-form-urlencoded',
    Authorization: `Bearer ${ getStoredAuthToken() }`,
} );

/**
 * postAuthRequest requests the access token (e.g. through refresh token or user authentication)
 * @param {*} data
 * @param {*} headers
 */
const postAuthRequest = ( data, headers ) => axios
    .post( API + ENDPOINTS.AUTHENTICATE, data, { headers } )
    .catch( ( err ) => {
        throw Error( `${ err.response.data.code }:${ err.response.message }` );
    } );

/**
 *  refreshAuthToken gets called to retrieve a new access token via the refresh token
 * @param {Function} resolve
 */
const refreshAuthToken = ( resolve, handlerInput ) => {
    const clientId = process.env.REACT_APP_OAUTH_CLIENT_KEY_ID;
    const clientSecret = process.env.REACT_APP_OAUTH_CLIENT_SECRET_KEY;
    const headers = getTokenHeaders( clientId, clientSecret );
    const refreshToken = getStoredRefreshToken();
    const data = {
        grant_type: GRANT_TYPES.REFRESH_TOKEN,
        refresh_token: refreshToken,
    };
    return authenticate( data, headers, handlerInput )
        .then( () => resolve() )
        .catch( ( err ) => {
            throw Error( `${ err.response.data.code }:${ err.response.message }` );
        } );
};

module.exports = {
    GRANT_TYPES,
    getTokenHeaders,
    getCodeHeaders,
    postAuthRequest,
    refreshAuthToken,
};
