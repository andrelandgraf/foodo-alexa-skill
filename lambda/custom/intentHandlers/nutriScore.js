const intents = require( './index' );

const NutriScoreHandler = {
    canHandle( handlerInput ) {
        const { request } = handlerInput.requestEnvelope;
        // checks request type
        return request.type === intents.INTENT_REQUEST
        && request.intent.name === intents.NUTRI_SCORE_INTENT;
    },
    handle( handlerInput ) {
        const requestAttributes = handlerInput.attributesManager.getRequestAttributes();
        const speakOutput = requestAttributes.t( 'NUTRI_SCORE_MESSAGE' );
        return handlerInput.responseBuilder
            .speak( speakOutput )
            .getResponse();
    },
};

module.exports = {
    NutriScoreHandler,
};
