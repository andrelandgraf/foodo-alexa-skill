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
        console.log( JSON.stringify( user ) );
        const speakOutput = requestAttributes.t( 'LAUNCH_MESSAGE', { name: user.username } );
        const repromtOutput = requestAttributes.t( 'LAUNCH_REPROMT' );
        return handlerInput.responseBuilder
            .speak( speakOutput )
            .withSimpleCard( requestAttributes.t( 'SKILL_NAME' ), speakOutput )
            .reprompt( repromtOutput )
            .getResponse();
    },
};

module.exports = {
    LaunchHandler,
};
