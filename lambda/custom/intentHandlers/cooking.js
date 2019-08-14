const intents = require( './index' );
const { RECIPES } = require( './recipe' );

const {
    startCooking, blockSubstitution, substitute, getSubstitutes, getImprovements,
} = require( '../services/foodo-api/cooking/cooking' );

// Helper functions

/**
 * Helper functions to match and find recipe by name
 * @param {string} recipeName
 */
const findRecipe = recipeName => RECIPES.find( r => ( r.includes( '-' )
        && r.replace( /[-]/g, ' ' ).toLowerCase() === recipeName.toLowerCase() )
    || r.toLowerCase() === recipeName.toLowerCase() );

/**
 * Helper function to get substiute names from the substitutes array
 * @param {Array} substitutes
 * @param {string} locale
 */
const getSubstituteNames = ( substitutes, locale ) => substitutes
    .map( s => s.substitute.name[ locale ] ).join( ', ' );

// Intent handler

const CookingHandler = {
    canHandle( handlerInput ) {
        const { request } = handlerInput.requestEnvelope;
        return request.type === intents.INTENT_REQUEST
          && request.intent.name === intents.COOKING_INTENT;
    },
    async handle( handlerInput ) {
        const requestAttributes = handlerInput.attributesManager.getRequestAttributes();
        const locale = handlerInput.requestEnvelope.request.locale.substring( 0, 2 );
        const currentIntent = handlerInput.requestEnvelope.request.intent;
        const { recipe } = currentIntent.slots;

        // if user has not yet decided what to cook prompt this
        if ( !recipe.value ) {
            const speakOutput = requestAttributes.t( 'NO_RECIPE_CHOSEN' );
            return handlerInput.responseBuilder
                .speak( speakOutput )
                .addElicitSlotDirective( 'recipe' )
                .getResponse();
        }

        // if user has fully improved the recipe and doesn't cook anything else
        if ( recipe.value === 'nein' || recipe.value === 'no' ) {
            const payload = await getImprovements( handlerInput );

            const totalKJold = payload.oldValues.KiloJoule * ( payload.oldWeight / 100 );
            const totalKJnew = payload.newValues.KiloJoule * ( payload.newWeight / 100 );

            const reduce = Math.round( totalKJold - totalKJnew );

            const isImprovement = payload.oldScore !== payload.newScore;

            const startSentence = requestAttributes.t( 'NO_NEXT_RECIPE_START' );

            const improvementSentence = isImprovement ? requestAttributes.t( 'NO_NEXT_RECIPE_IMPROVEMENT', {
                oldScore: payload.oldScore,
                newScore: payload.newScore,
            } ) : '';

            const add = {
                en: {
                    long: 'Additionally, you',
                    short: 'You',
                },
                de: {
                    long: 'Außerdem sparst du',
                    short: 'Du sparst ',
                },
            };

            const reductionSentence = reduce > 0 ? requestAttributes.t( 'NO_NEXT_RECIPE_REDUCTION', {
                reduce,
                intro: isImprovement ? add[ locale ].long : add[ locale ].short,
            } ) : '';

            const endSentence = requestAttributes.t( 'NO_NEXT_RECIPE_END' );


            const speakOutput = startSentence
                + improvementSentence
                + reductionSentence
                + endSentence;

            return handlerInput.responseBuilder
                .speak( speakOutput )
                .getResponse();
        }

        // if user has fully improved the recipe and decides to cook something else
        if ( recipe.value === 'ja' || recipe.value === 'yes' ) {
            const speakOutput = requestAttributes.t( 'NEXT_RECIPE_MESSAGE', { recipes: RECIPES.join( ', ' ) } );
            return handlerInput.responseBuilder
                .speak( speakOutput )
                .addElicitSlotDirective( 'recipe' )
                .getResponse();
        }

        // this will prompt an offer to substitue the worst ingredient of the current recipe
        const { yesNoSubstitute } = currentIntent.slots;
        if ( !yesNoSubstitute.value ) {
            const recipeName = findRecipe( recipe.value );

            if ( !recipeName ) {
                const speakOutput = requestAttributes.t( 'WRONG_RECIPE' );
                return handlerInput.responseBuilder
                    .speak( speakOutput )
                    .addElicitSlotDirective( 'recipe' )
                    .getResponse();
            }

            const payload = await startCooking( recipeName, handlerInput );

            let speakOutput;

            if ( payload.possibleSubstitutes ) {
                const ingredient = payload.possibleSubstitutes.original.name[ locale ];
                speakOutput = requestAttributes.t( 'COOKING_MESSAGE', { recipe: recipe.value, ingredient } );
            } else {
                speakOutput = requestAttributes.t( 'COOKING_MESSAGE_NOSUB', { recipe: recipe.value } );
                return handlerInput.responseBuilder
                    .speak( speakOutput )
                    .addElicitSlotDirective( 'recipe' )
                    .getResponse();
            }

            const repromptOutput = requestAttributes.t( 'COOKING_REPROMPT' );
            return handlerInput.responseBuilder
                .speak( speakOutput )
                .reprompt( repromptOutput )
                .addElicitSlotDirective( 'yesNoSubstitute' )
                .getResponse();
        }

        // if the user does not want to substitute, this will be promted
        if ( yesNoSubstitute.value === 'nein' || yesNoSubstitute.value === 'no' ) {
            blockSubstitution( handlerInput );
            const speakOutput = requestAttributes.t( 'NO_SUBSTITUTE_MESSAGE' );
            return handlerInput.responseBuilder
                .speak( speakOutput )
                .getResponse();
        }

        // if the user does want to substitute, this will be promted
        const { selectSubstitute } = currentIntent.slots;
        if ( ( yesNoSubstitute.value === 'ja' || yesNoSubstitute.value === 'yes' ) && !selectSubstitute.value ) {
            const substitutes = await getSubstitutes( handlerInput );
            const speakOutput = requestAttributes.t( 'SELECT_SUBSTITUTE_MESSAGE', { substitutes: getSubstituteNames( substitutes, locale ) } );
            return handlerInput.responseBuilder
                .speak( speakOutput )
                .reprompt( speakOutput )
                .addElicitSlotDirective( 'selectSubstitute' )
                .getResponse();
        }

        // the selected substitute number will be used to improve the recipe
        // and prompt some final output
        if ( selectSubstitute.value ) {
            const substituted = await substitute( selectSubstitute.value, handlerInput );
            const speakOutput = requestAttributes.t( 'SUBSTITUTE_MESSAGE_SUCCESS',
                {
                    original: substituted.original[ locale ],
                    substitute: substituted.ingredient[ locale ],
                } );
            return handlerInput.responseBuilder
                .speak( speakOutput )
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
