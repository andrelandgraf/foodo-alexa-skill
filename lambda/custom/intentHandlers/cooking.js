const intents = require( './index' );

const CookingHandler = {
    canHandle(handlerInput) {
      const request = handlerInput.requestEnvelope.request;
      // checks request type
      return request.type === intents.INTENT_REQUEST
          && request.intent.name === intents.COOKING_INTENT;
    },
    handle(handlerInput) {
      console.log(handlerInput.requestEnvelope.request.intent.slots);
      const requestAttributes = handlerInput.attributesManager.getRequestAttributes();
      const recipe = handlerInput.requestEnvelope.request.intent.slots.recipe.value;
      const ingredient = 'Avocado';
      const speakOutput = requestAttributes.t('COOKING_MESSAGE', { recipe, ingredient } );
      const repromtOutput = requestAttributes.t('COOKING_REPROMT');
      return handlerInput.responseBuilder
        .speak(speakOutput)
        .repromt(repromtOutput)
        .getResponse();
    },
  };

  module.exports = {
    CookingHandler,
  }