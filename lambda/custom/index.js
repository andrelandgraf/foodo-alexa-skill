/**
 * Starting point of the lambda application
 */

/* eslint-disable import/no-extraneous-dependencies */
const Alexa = require( 'ask-sdk-core' );

const builtInHandlers = require( './intentHandlers/builtInHandler' );
const errorHandlers = require( './intentHandlers/errorHandler' );
const launchHandlers = require( './intentHandlers/launch' );
const recipeHandlers = require( './intentHandlers/recipe' );
const cookingHandlers = require( './intentHandlers/cooking' );
const pitchHandlers = require( './intentHandlers/pitch' );
const potatoeHandlers = require( './intentHandlers/potatoe' );
const nutriScoreHandler = require( './intentHandlers/nutriScore' );

const internationalization = require( './internationalization/internationalization' );

const skillBuilder = Alexa.SkillBuilders.custom();

exports.handler = skillBuilder
    // add Intent Handlers to our Alexa Skill
    .addRequestHandlers(
        launchHandlers.LaunchHandler,
        builtInHandlers.HelpHandler,
        builtInHandlers.ExitHandler,
        builtInHandlers.FallbackHandler,
        recipeHandlers.RecipeHandler,
        cookingHandlers.CookingHandler,
        builtInHandlers.SessionEndedRequestHandler,
        pitchHandlers.PitchHandler,
        potatoeHandlers.PotatoeHandler,
        nutriScoreHandler.NutriScoreHandler,
    )
    // add Localization Interceptor as a middleware for localisation
    .addRequestInterceptors( internationalization.LocalizationInterceptor )
    .addErrorHandlers( errorHandlers.ErrorHandler )
    .lambda();
