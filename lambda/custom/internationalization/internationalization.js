const i18n = require('i18next');
const sprintf = require('i18next-sprintf-postprocessor');

const languages = require( './languages/index' );
const languageStrings = languages.languageStrings;

const LocalizationInterceptor = {
    process(handlerInput) {
      // Gets the locale from the request and initializes i18next.
      i18n.init({
        lng: handlerInput.requestEnvelope.request.locale,
        resources: languageStrings,
      });
      // this gets the request attributes and save the localize function inside
      // it to be used in a handler by calling requestAttributes.t(STRING_ID, [args...])
      const attributes = handlerInput.attributesManager.getRequestAttributes();
      attributes.t = function translate(...args) {
        return i18n.t(...args);
      };
    },
  };

  module.exports = {
      LocalizationInterceptor,
  }