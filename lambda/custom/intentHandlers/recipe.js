const intents = require( './index' );

const RECIPES = [
    'Eggs Benedict',
    'Chicken Tikka Masala',
    'Coconut-Carrot-Soup',
    'Fried Potatoes',
    'Pasta with Tomato-Mozarella-Sauce',
    'Sausages with potatoes and vegetables',
    'Lasagne',
    'Pizza dough',
    'Chocolate Souffle',
];

const RecipeHandler = {
    canHandle( handlerInput ) {
        const { request } = handlerInput.requestEnvelope;
        // checks request type
        return request.type === intents.INTENT_REQUEST
          && request.intent.name === intents.RECIPE_INTENT;
    },
    handle( handlerInput ) {
        const requestAttributes = handlerInput.attributesManager.getRequestAttributes();
        const speakOutput = requestAttributes.t( 'RECIPE_MESSAGE', { recipes: RECIPES.join( ', ' ) } );
        const repromptOutput = requestAttributes.t( 'RECIPE_REPROMPT' );
        return handlerInput.responseBuilder
            .speak( speakOutput )
            .reprompt( repromptOutput )
            .getResponse();
    },
};

module.exports = {
    RecipeHandler,
    RECIPES,
};
