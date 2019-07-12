const intents = require( './index' );

const PotatoeHandler = {
    canHandle( handlerInput ) {
        const { request } = handlerInput.requestEnvelope;
        // checks request type
        return request.type === intents.INTENT_REQUEST
            && request.intent.name === intents.POTATOE_INTENT;
    },
    handle( handlerInput ) {
        const requestAttributes = handlerInput.attributesManager.getRequestAttributes();
        const speakOutput = `${ requestAttributes.t( 'POTATOE_MESSAGE' ) }`;
        return handlerInput.responseBuilder
            .speak( speakOutput )
            .getResponse();
    },
};

module.exports = {
    PotatoeHandler,
};
