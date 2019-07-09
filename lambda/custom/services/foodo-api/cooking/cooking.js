const { postRequest } = require( '../httpService' );
const { ENDPOINTS } = require( '../api' );

const startCooking = ( recipeName, handlerInput ) => postRequest(
    `${ ENDPOINTS.COOKING }${ ENDPOINTS.COOKING_ENDPOINTS }`,
    { recipeName }, handlerInput,
);

module.exports = {
    startCooking,
};
