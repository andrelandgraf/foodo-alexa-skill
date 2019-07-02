const intents = require( './index' );

const recipes = [
    'Eggs Benedict',
    'Chicken Tikka Masala',
    'Coconout-Carrot-Soup',
    'Fried Potatoes',
    'Pasta with Tomato-Mozarella-Sauce',
    'Sausages with potatoes and vegetables',
];

const RecipeHandler = {
    canHandle(handlerInput) {
      const request = handlerInput.requestEnvelope.request;
      // checks request type
      return request.type === intents.INTENT_REQUEST
          && request.intent.name === intents.RECIPE_INTENT;
    },
    handle(handlerInput) {
      const requestAttributes = handlerInput.attributesManager.getRequestAttributes();
      const speakOutput = `${ requestAttributes.t('RECIPE_MESSAGE')} ${recipes.join(', ')}`;
      const repromtOutput = requestAttributes.t('RECIPE_REPROMT');
      return handlerInput.responseBuilder
        .speak(speakOutput)
        .reprompt(repromtOutput)
        .getResponse();
    },
  };

  module.exports = {
    RecipeHandler,
  }