const { ENDPOINTS } = require( '../api' );
const httpService = require( '../httpService' );

const getUser = handlerInput => httpService.getRequest(
    `${ ENDPOINTS.USER }${ ENDPOINTS.USER_ENDPOINTS.ME }`, handlerInput,
);

module.exports = {
    getUser,
};
