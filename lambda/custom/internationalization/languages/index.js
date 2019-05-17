const de = require( './de' );
const en = require( './en' );

const deData = de.deData;
const dedeData = de.dedeData;
const enData = en.enData;
const enauData = en.enauData;
const encaData = en.encaData;
const engbData = en.engbData;
const eninData = en.eninData;
const enusData = en.enusData;

// constructs i18n and l10n data structure
// translations for this sample can be found at the end of this file
const languageStrings = {
    'de': deData,
    'de-DE': dedeData,
    'en': enData,
    'en-AU': enauData,
    'en-CA': encaData,
    'en-GB': engbData,
    'en-IN': eninData,
    'en-US': enusData,
  };

module.exports = {
    languageStrings,
}