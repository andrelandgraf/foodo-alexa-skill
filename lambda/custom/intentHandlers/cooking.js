const intents = require( './index' );

const { startCooking } = require( '../services/foodo-api/cooking/cooking' );

const CookingHandler = {
    canHandle( handlerInput ) {
        const { request } = handlerInput.requestEnvelope;
        return request.type === intents.INTENT_REQUEST
          && request.intent.name === intents.COOKING_INTENT;
    },
    async handle( handlerInput ) {
        const requestAttributes = handlerInput.attributesManager.getRequestAttributes();
        const currentIntent = handlerInput.requestEnvelope.request.intent;
        const { recipe } = currentIntent.slots;

        if ( !recipe.value ) {
            return handlerInput.responseBuilder
                .speak( 'Super, lass uns kochen! Wonach steht dir denn der Sinn?' )
                .reprompt( 'Was würdest du gerne kochen?' )
                .addElicitSlotDirective( 'recipe' )
                .getResponse();
        }

        const { yesNoSubstitute } = currentIntent.slots;
        if ( !yesNoSubstitute.value ) {
            const payload = await startCooking( recipe.value );
            const ingredient = payload.possibleSubstitution.original.name.de;
            const speakOutput = requestAttributes.t( 'COOKING_MESSAGE', { recipe: recipe.value, ingredient } );
            const repromptOutput = requestAttributes.t( 'COOKING_REPROMT' );
            return handlerInput.responseBuilder
                .speak( speakOutput )
                .reprompt( repromptOutput )
                .addElicitSlotDirective( 'yesNoSubstitute' )
                .getResponse();
        }

        if ( yesNoSubstitute.value === 'nein' ) {
            const speakOutput = requestAttributes.t( 'NO_SUBSTITUTE_MESSAGE' );
            return handlerInput.responseBuilder
                .speak( speakOutput )
                .getResponse();
        }

        const { selectSubstitute } = currentIntent.slots;
        if ( yesNoSubstitute.value === 'ja' && !selectSubstitute.value ) {
            return handlerInput.responseBuilder
                .speak( 'dynamischer substiute vorschlag, willst du 1 2 oder 3?' )
                .reprompt( ' willst du 1 2 oder 3?' )
                .addElicitSlotDirective( 'selectSubstitute' )
                .getResponse();
        }

        if ( selectSubstitute.value ) {
            return handlerInput.responseBuilder
                .speak( 'Coolioo, ich habe Substituiert!' )
                .getResponse();
        }

        return handlerInput.responseBuilder
            .addDelegateDirective( currentIntent )
            .getResponse();
    },
};

module.exports = {
    CookingHandler,
};
