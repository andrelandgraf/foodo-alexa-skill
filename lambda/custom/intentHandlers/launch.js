const intents = require( './index' );
const userService = require( '../services/foodo-api/user/userService' );

const LaunchHandler = {
    canHandle( handlerInput ) {
        const { request } = handlerInput.requestEnvelope;
        return request.type === intents.LAUNCH_REQUEST;
    },
    async handle( handlerInput ) {
        const requestAttributes = handlerInput.attributesManager.getRequestAttributes();
        const user = await userService.getUser( handlerInput );
        const speakOutput = requestAttributes.t( 'LAUNCH_MESSAGE', { name: user.username } );
        const repromptOutput = requestAttributes.t( 'LAUNCH_REPROMPT' );
        return handlerInput.responseBuilder
            .speak( speakOutput )
            .reprompt( repromptOutput )
            .getResponse();
    },
};

module.exports = {
    LaunchHandler,
};
