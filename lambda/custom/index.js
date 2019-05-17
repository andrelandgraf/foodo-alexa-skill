// Alexa Fact Skill - Sample for Beginners
/* eslint no-use-before-define: 0 */
// sets up dependencies
const Alexa = require('ask-sdk-core');

const builtInHandlers = require( './intentHandlers/builtInHandler' );
const errorHandlers = require( './intentHandlers/errorHandler' );
const helloWorldHandlers = require( './intentHandlers/helloWorld' );

const internationalization = require( './internationalization/internationalization' );

const skillBuilder = Alexa.SkillBuilders.custom();

exports.handler = skillBuilder
  .addRequestHandlers(
    helloWorldHandlers.HelloWorldHandler,
    builtInHandlers.HelpHandler,
    builtInHandlers.ExitHandler,
    builtInHandlers.FallbackHandler,
    builtInHandlers.SessionEndedRequestHandler,
  )
  .addRequestInterceptors( internationalization.LocalizationInterceptor )
  .addErrorHandlers( errorHandlers.ErrorHandler )
  .lambda();


