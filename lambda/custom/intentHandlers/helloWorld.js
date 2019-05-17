const HelloWorldHandler = {
    canHandle(handlerInput) {
      const request = handlerInput.requestEnvelope.request;
      // checks request type
      return request.type === 'LaunchRequest'
        || (request.type === 'IntentRequest'
          && request.intent.name === 'HelloWorldIntent');
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