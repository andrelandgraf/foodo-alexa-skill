const intents = require( './index' );
const { RECIPES } = require( './recipe' );

const {
    startCooking, blockSubstitution, substitute, getSubstitutes,
} = require( '../services/foodo-api/cooking/cooking' );

const findRecipe = recipeName => RECIPES.find( r => r.toLowerCase() === recipeName.toLowerCase() );

const getSubstiuteNames = substitutes => substitutes
    .map( s => s.substitute.name.de ).join( ', ' );

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
            const payload = await startCooking( findRecipe( recipe.value ), handlerInput );
            const ingredient = payload.possibleSubstitutes.original.name.de;
            const speakOutput = requestAttributes.t( 'COOKING_MESSAGE', { recipe: recipe.value, ingredient } );
            const repromptOutput = requestAttributes.t( 'COOKING_REPROMT' );
            return handlerInput.responseBuilder
                .speak( speakOutput )
                .reprompt( repromptOutput )
                .addElicitSlotDirective( 'yesNoSubstitute' )
                .getResponse();
        }

        if ( yesNoSubstitute.value === 'nein' ) {
            blockSubstitution( handlerInput );
            const speakOutput = requestAttributes.t( 'NO_SUBSTITUTE_MESSAGE' );
            return handlerInput.responseBuilder
                .speak( speakOutput )
                .getResponse();
        }

        const { selectSubstitute } = currentIntent.slots;
        if ( yesNoSubstitute.value === 'ja' && !selectSubstitute.value ) {
            const substitutes = await getSubstitutes( handlerInput );
            const speakOutput = `Sag 1, 2, oder 3 um eines der folgenden Substitutes auszuwählen ${ getSubstiuteNames( substitutes ) }`;
            return handlerInput.responseBuilder
                .speak( speakOutput )
                .reprompt( 'Sag, 1, 2 oder 3.' )
                .addElicitSlotDirective( 'selectSubstitute' )
                .getResponse();
        }

        if ( selectSubstitute.value ) {
            const substituted = await substitute( selectSubstitute.value, handlerInput );
            return handlerInput.responseBuilder
                .speak( `Super, ich habe ${ substituted.ingredient.de } durch ${ substituted.original.de } ersetzt` )
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
