const axios = require( 'axios' );

const { isUnauthorizedError } = require( '../httpProtocol' );
const { API } = require( './api' );
const { refreshAuthToken } = require( './oAuthService' );
const { getAuthToken, isAuthenticated } = require( './user/userService' );

function getHeaders( handlerInput ) {
    if ( isAuthenticated( handlerInput ) ) {
        return {
            accept: 'application/json',
            authorization: `Bearer ${ getAuthToken( handlerInput ) }`,
        };
    }
    return { accept: 'application/json' };
}

function postHeaders( handlerInput ) {
    if ( isAuthenticated( handlerInput ) ) {
        return {
            'content-type': 'application/json',
            authorization: `Bearer ${ getAuthToken( handlerInput ) }`,
        };
    }
    return { 'content-type': 'application/json' };
}

const postRequest = ( endpoint, data, handlerInput ) => axios
    .post( API + endpoint, data, { headers: postHeaders( handlerInput ) } )
    .then( res => res.data )
    .catch( ( err ) => {
        console.log( err );
        const { status } = err.response;
        if ( isUnauthorizedError( status ) ) {
            return refreshAuthToken(
                () => postRequest( endpoint, data, handlerInput ),
            );
        }
        throw Error( status );
    } );

const putRequest = ( endpoint, data, handlerInput ) => axios
    .put( API + endpoint, data, { headers: postHeaders( handlerInput ) } )
    .then( res => res.data )
    .catch( ( err ) => {
        const { status } = err.response;
        if ( isUnauthorizedError( status ) ) {
            return refreshAuthToken(
                () => putRequest( endpoint, data, handlerInput ),
            );
        }
        throw Error( `${ err.response.data.code }:${ err.response.message }` );
    } );

const deleteRequest = ( endpoint, data, handlerInput ) => axios
    .delete( API + endpoint, { headers: postHeaders( handlerInput ), data } )
    .then( res => res.data )
    .catch( ( err ) => {
        const { status } = err.response;
        if ( isUnauthorizedError( status ) ) {
            return refreshAuthToken(
                () => deleteRequest( endpoint, data, handlerInput ),
            );
        }
        throw Error( `${ err.response.data.code }:${ err.response.message }` );
    } );

const getRequest = ( endpoint, handlerInput ) => axios
    .get( API + endpoint, { headers: getHeaders( handlerInput ) } )
    .then( res => res.data )
    .catch( ( err ) => {
        const { status } = err.response;
        if ( isUnauthorizedError( status ) ) {
            return refreshAuthToken(
                () => getRequest( endpoint, handlerInput ),
            );
        }
        throw Error( `${ err.response.data.code }:${ err.response.message }` );
    } );

module.exports = {
    postRequest,
    getRequest,
    deleteRequest,
    putRequest,
    postHeaders,
    getHeaders,
};
