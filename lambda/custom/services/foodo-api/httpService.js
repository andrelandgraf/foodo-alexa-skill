const axios = require( 'axios' );
const { API } = require( './api' );

const getAuthToken = handlerInput => handlerInput.requestEnvelope.context
    .System.user.accessToken;

const isAuthenticated = handlerInput => !!handlerInput.requestEnvelope.context
    .System.user.accessToken;

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
        throw Error( status );
    } );

const putRequest = ( endpoint, data, handlerInput ) => axios
    .put( API + endpoint, data, { headers: postHeaders( handlerInput ) } )
    .then( res => res.data )
    .catch( ( err ) => {
        const { status } = err.response;
        throw Error( status );
    } );

const deleteRequest = ( endpoint, data, handlerInput ) => axios
    .delete( API + endpoint, { headers: postHeaders( handlerInput ), data } )
    .then( res => res.data )
    .catch( ( err ) => {
        const { status } = err.response;
        throw Error( status );
    } );

const getRequest = ( endpoint, handlerInput ) => axios
    .get( API + endpoint, { headers: getHeaders( handlerInput ) } )
    .then( res => res.data )
    .catch( ( err ) => {
        const { status } = err.response;
        throw Error( status );
    } );

module.exports = {
    postRequest,
    getRequest,
    deleteRequest,
    putRequest,
    postHeaders,
    getHeaders,
};
