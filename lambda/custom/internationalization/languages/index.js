const de = require( './de' );
const en = require( './en' );

const { deData } = de;
const { enData } = en;

// constructs i18n and l10n data structure
// translations for this sample can be found at the end of this file
const languageStrings = {
    de: deData,
    en: enData,
};

module.exports = {
    languageStrings,
};
