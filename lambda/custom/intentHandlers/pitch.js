const intents = require( './index' );

// Handler used to pitch Foodo to the user
const PitchHandler = {
    canHandle( handlerInput ) {
        const { request } = handlerInput.requestEnvelope;
        // checks request type
        return request.type === intents.INTENT_REQUEST
        && request.intent.name === intents.PITCH_INTENT;
    },
    handle( handlerInput ) {
        const requestAttributes = handlerInput.attributesManager.getRequestAttributes();
        const speakOutput = requestAttributes.t( 'PITCH_MESSAGE' );
        return handlerInput.responseBuilder
            .speak( speakOutput )
            .getResponse();
    },
};

module.exports = {
    PitchHandler,
};
