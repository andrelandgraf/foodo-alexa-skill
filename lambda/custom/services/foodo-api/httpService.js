import axios from 'axios';

import { isUnauthorizedError } from '../utilities/httpProtocol';
import { API } from './api';
import { refreshAuthToken } from './oAuthService';
import { getAuthToken, isAuthenticated } from './user/userService';

function getHeaders( handlerInput ) {
    if ( isAuthenticated( handlerInput) ) {
        return {
            accept: 'application/json',
            authorization: `Bearer ${ getAuthToken(handlerInput) }`,
        };
    }
    return { accept: 'application/json', };
}

function postHeaders( handlerInput ) {
    if ( isAuthenticated( handlerInput) ) {
        return {
            'content-type': 'application/json',
            authorization: `Bearer ${ getAuthToken(handlerInput) }`,
        };
    }
    return { 'content-type': 'application/json', };
}

export const postRequest = ( endpoint, data, handlerInput ) => axios
    .post( API + endpoint, data, { headers: postHeaders(handlerInput) } )
    .then( res => res.data )
    .catch( ( err ) => {
        const { status } = err.response;
        if ( isUnauthorizedError( status ) ) {
            return refreshAuthToken(
                () => postRequest( endpoint, data, handlerInput ),
            );
        }
        throw Error( `${ err.response.data.code }:${ err.response.message }` );
    } );

export const putRequest = ( endpoint, data, handlerInput ) => axios
    .put( API + endpoint, data, { headers: postHeaders(handlerInput) } )
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

export const deleteRequest = ( endpoint, data, handlerInput ) => axios
    .delete( API + endpoint, { headers: postHeaders(handlerInput), data } )
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

export const getRequest = ( endpoint, handlerInput ) => axios
    .get( API + endpoint, { headers: getHeaders(handlerInput) } )
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
