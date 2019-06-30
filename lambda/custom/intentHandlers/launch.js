const intents = require( './index' );

const LaunchHandler = {
    canHandle(handlerInput) {
      const request = handlerInput.requestEnvelope.request;
      return request.type === intents.LAUNCH_REQUEST;
    },
    handle(handlerInput) {
      const requestAttributes = handlerInput.attributesManager.getRequestAttributes();
      const speakOutput = requestAttributes.t('LAUNCH_MESSAGE');
      const repromtOutput = requestAttributes.t('LAUNCH_REPROMT');
      return handlerInput.responseBuilder
        .speak(speakOutput)
        .withSimpleCard(requestAttributes.t('SKILL_NAME'), speakOutput)
        .reprompt(repromtOutput)
        .getResponse();
    },
  };

  module.exports = {
    LaunchHandler,
  }