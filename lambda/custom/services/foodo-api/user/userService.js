import qs from 'qs';

import { ENDPOINTS } from '../api';
import { postAuthRequest } from '../oAuthService';
import { getRequest } from '../httpService';

export const getAuthToken = handlerInput => handlerInput.requestEnvelope.context
    .System.user.accessToken;

/**
 * authenticate handles the login of a user via token retrieval
 * @param {*} data
 * @param {*} header
 * @returns {Object} user object
 */
export const authenticate = ( data, header, handlerInput ) =>
    postAuthRequest( qs.stringify( data ), header, handlerInput )
        .then( ( res ) => res.data.user );

export const getUser = handlerInput => getRequest(
    `${ ENDPOINTS.USER }${ ENDPOINTS.USER_ENDPOINTS.ME }`, handlerInput
    );

export const isAuthenticated = handlerInput => !!handlerInput.requestEnvelope.context
    .System.user.accessToken;
