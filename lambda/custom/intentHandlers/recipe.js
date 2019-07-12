const intents = require( './index' );

const RECIPES = [
    'Eggs Benedict',
    'Chicken Tikka Masala',
    'Coconut-Carrot-Soup',
    'Fried Potatoes',
    'Pasta with Tomato-Mozarella-Sauce',
    'Sausages with potatoes and vegetables',
    'Lasagna',
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
        const speakOutput = `<speak>${ requestAttributes.t( 'RECIPE_MESSAGE' ) } <lang xml:lang="en-US"> ${ RECIPES.join( ', ' ) }.</lang></speak>`;
        const repromtOutput = requestAttributes.t( 'RECIPE_REPROMT' );
        return handlerInput.responseBuilder
            .speak( speakOutput )
            .reprompt( repromtOutput )
            .getResponse();
    },
};

module.exports = {
    RecipeHandler,
    RECIPES,
};
