const intents = require( './index' );

const HelloWorldHandler = {
    canHandle(handlerInput) {
      const request = handlerInput.requestEnvelope.request;
      // checks request type
      return request.type === intents.LAUNCH_REQUEST
        || (request.type === intents.INTENT_REQUEST
          && request.intent.name === intents.HELLO_WORLD_INTENT );
    },
    handle(handlerInput) {
      const requestAttributes = handlerInput.attributesManager.getRequestAttributes();
      const speakOutput = requestAttributes.t('HELLO_WORLD_MESSAGE');
  
      return handlerInput.responseBuilder
        .speak(speakOutput)
        .withSimpleCard(requestAttributes.t('SKILL_NAME'), speakOutput)
        .getResponse();
    },
  };

  module.exports = {
      HelloWorldHandler,
  }