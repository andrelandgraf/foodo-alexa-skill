// Alexa Fact Skill - Sample for Beginners
/* eslint no-use-before-define: 0 */
// sets up dependencies
const Alexa = require('ask-sdk-core');

const builtInHandlers = require( './intentHandlers/builtInHandler' );
const errorHandlers = require( './intentHandlers/errorHandler' );
const launchHandlers = require( './intentHandlers/launch' );
const recipeHandlers = require('./intentHandlers/recipe');
const cookingHandlers = require('./intentHandlers/cooking');
const substiuteHandlers = require('./intentHandlers/substitute');
const pitchHandlers = require('./intentHandlers/pitch');

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
    substiuteHandlers.SubstituteHandler,
    substiuteHandlers.NoHandler,
    builtInHandlers.SessionEndedRequestHandler,
    pitchHandlers.PitchHandler,
  )
  .addRequestInterceptors( internationalization.LocalizationInterceptor )
  .addErrorHandlers( errorHandlers.ErrorHandler )
  .lambda();


