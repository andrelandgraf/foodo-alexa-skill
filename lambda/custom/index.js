/* eslint-disable import/no-extraneous-dependencies */
const Alexa = require( 'ask-sdk-core' );

const builtInHandlers = require( './intentHandlers/builtInHandler' );
const errorHandlers = require( './intentHandlers/errorHandler' );
const launchHandlers = require( './intentHandlers/launch' );
const recipeHandlers = require( './intentHandlers/recipe' );
const cookingHandlers = require( './intentHandlers/cooking' );
const pitchHandlers = require( './intentHandlers/pitch' );

const internationalization = require( './internationalization/internationalization' );

const skillBuilder = Alexa.SkillBuilders.custom();

exports.handler = skillBuilder
    .addRequestHandlers(
        launchHandlers.LaunchHandler,
        builtInHandlers.HelpHandler,
        builtInHandlers.ExitHandler,
        builtInHandlers.FallbackHandler,
        recipeHandlers.RecipeHandler,
        cookingHandlers.CookingHandler,
        builtInHandlers.SessionEndedRequestHandler,
        pitchHandlers.PitchHandler,
    )
    .addRequestInterceptors( internationalization.LocalizationInterceptor )
    .addErrorHandlers( errorHandlers.ErrorHandler )
    .lambda();
