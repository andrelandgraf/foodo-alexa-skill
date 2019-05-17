/**
 * Built-in Intents
 */

const HelpHandler = {
    canHandle(handlerInput) {
      const request = handlerInput.requestEnvelope.request;
      return request.type === 'IntentRequest'
        && request.intent.name === 'AMAZON.HelpIntent';
    },
    handle(handlerInput) {
      const requestAttributes = handlerInput.attributesManager.getRequestAttributes();
      return handlerInput.responseBuilder
        .speak(requestAttributes.t('HELP_MESSAGE'))
        .reprompt(requestAttributes.t('HELP_REPROMPT'))
        .getResponse();
    },
};

// 2018-Aug-01: AMAZON.FallbackIntent is only currently available in en-* locales.
//              This handler will not be triggered except in those locales, so it can be
//              safely deployed for any locale.
const FallbackHandler = {
    canHandle(handlerInput) {
        const request = handlerInput.requestEnvelope.request;
        return request.type === 'IntentRequest'
        && request.intent.name === 'AMAZON.FallbackIntent';
    },
    handle(handlerInput) {
        const requestAttributes = handlerInput.attributesManager.getRequestAttributes();
        return handlerInput.responseBuilder
        .speak(requestAttributes.t('FALLBACK_MESSAGE'))
        .reprompt(requestAttributes.t('FALLBACK_REPROMPT'))
        .getResponse();
    },
};

const ExitHandler = {
    canHandle(handlerInput) {
        const request = handlerInput.requestEnvelope.request;
        return request.type === 'IntentRequest'
        && (request.intent.name === 'AMAZON.CancelIntent'
            || request.intent.name === 'AMAZON.StopIntent');
    },
    handle(handlerInput) {
        const requestAttributes = handlerInput.attributesManager.getRequestAttributes();
        return handlerInput.responseBuilder
        .speak(requestAttributes.t('STOP_MESSAGE'))
        .getResponse();
    },
};

const SessionEndedRequestHandler = {
    canHandle(handlerInput) {
        const request = handlerInput.requestEnvelope.request;
        return request.type === 'SessionEndedRequest';
    },
    handle(handlerInput) {
        console.log(`Session ended with reason: ${handlerInput.requestEnvelope.request.reason}`);
        return handlerInput.responseBuilder.getResponse();
    },
};

module.exports = {
    HelpHandler,
    FallbackHandler,
    ExitHandler,
    SessionEndedRequestHandler,
}