const intents = require( './index' );

const SubstituteHandler = {
  canHandle(handlerInput) {
    const request = handlerInput.requestEnvelope.request;
    // checks request type
    return request.type === intents.INTENT_REQUEST
        && request.intent.name === intents.SUBSTITUTE_INTENT;
  },
  handle(handlerInput) {
    const requestAttributes = handlerInput.attributesManager.getRequestAttributes();
    const speakOutput = requestAttributes.t('SUBSTITUTE_MESSAGE');
    return handlerInput.responseBuilder
      .speak(speakOutput)
      .getResponse();
  },
};

const NoHandler = {
  canHandle(handlerInput) {
    const request = handlerInput.requestEnvelope.request;
    // checks request type
    return request.type === intents.INTENT_REQUEST
        && request.intent.name === intents.NO_SUBSTITUTE_INTNET;
  },
  handle(handlerInput) {
    const requestAttributes = handlerInput.attributesManager.getRequestAttributes();
    const speakOutput = requestAttributes.t('NO_SUBSTITUTE_MESSAGE');
    return handlerInput.responseBuilder
      .speak(speakOutput)
      .getResponse();
  },
};

  module.exports = {
    NoHandler,
    SubstituteHandler,
  }