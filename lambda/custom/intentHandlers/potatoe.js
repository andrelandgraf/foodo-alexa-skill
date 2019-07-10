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
        const repromtOutput = requestAttributes.t( 'POTATOE_REPROMPT' );
        return handlerInput.responseBuilder
            .speak( speakOutput )
            .reprompt( repromtOutput )
            .getResponse();
    },
};

module.exports = {
    PotatoeHandler,
};
