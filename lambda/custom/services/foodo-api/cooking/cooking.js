const { postRequest, getRequest } = require( '../httpService' );
const { ENDPOINTS } = require( '../api' );

const startCooking = ( recipeName, handlerInput ) => postRequest(
    `${ ENDPOINTS.COOKING }${ ENDPOINTS.COOKING_ENDPOINTS.START }`,
    { recipeName }, handlerInput,
);

const getSubstitutes = handlerInput => getRequest(
    `${ ENDPOINTS.COOKING }${ ENDPOINTS.COOKING_ENDPOINTS.SUBSTITUTES }`,
    handlerInput,
);

const substitute = ( selectedNumber, handlerInput ) => getRequest(
    `${ ENDPOINTS.COOKING }${ ENDPOINTS.COOKING_ENDPOINTS.SUBSTITUTE }${ selectedNumber }`,
    handlerInput,
);

const blockSubstitution = handlerInput => postRequest(
    `${ ENDPOINTS.COOKING }${ ENDPOINTS.COOKING_ENDPOINTS.BLOCK }`,
    handlerInput,
);

module.exports = {
    startCooking,
    getSubstitutes,
    substitute,
    blockSubstitution,
};
