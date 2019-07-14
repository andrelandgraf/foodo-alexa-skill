/* eslint-disable quotes */
const deData = {
    translation: {
        SKILL_NAME: 'foodo',
        HELP_MESSAGE: '<speak>Frag mich, welche <phoneme alphabet="ipa" ph="ʁeˈt͡sɛptə">Rezepte</phoneme> ich kenne, oder sag mir was Du heute kochen möchtest.</speak>',
        HELP_REPROMPT: 'Was möchtest du heute kochen?',
        FALLBACK_MESSAGE: '<speak>Frag mich, welche <phoneme alphabet="ipa" ph="ʁeˈt͡sɛptə">Rezepte</phoneme> ich kenne, oder sag mir, was du heute kochen möchtest.</speak>',
        FALLBACK_REPROMPT: 'Wie kann ich dir helfen?',
        ERROR_MESSAGE: '<speak>Es ist ein Fehler aufgetreten. <say-as interpret-as="interjection">Verdammt.</say-as></speak>',
        STOP_MESSAGE: '<speak>Fudo sagt Auf Wiedersehen!</speak>',
        LAUNCH_MESSAGE: '<speak>Hallo {{name}} und willkommen bei Fudo <audio src="soundbank://soundlibrary/magic_spells/magic_spells_14"/> Was würdest du heute gerne essen?</speak>',
        LAUNCH_REPROMPT: '<speak>Wenn du nicht weißt, was du gerne essen willst, kannst du mich gerne fragen, welche <phoneme alphabet="ipa" ph="ʁeˈt͡sɛptə">Rezepte</phoneme>  ich kenne.</speak>',
        RECIPE_MESSAGE: '<speak>Ich kenne folgende <phoneme alphabet="ipa" ph="ʁeˈt͡sɛptə">Rezepte</phoneme>: <lang xml:lang="en-US">{{ recipes }}</lang></speak>',
        RECIPE_REPROMPT: '<speak>Wenn du alle <phoneme alphabet="ipa" ph="ʁeˈt͡sɛptə">Rezepte</phoneme> kennenlernen möchtest, dann besuche doch unsere Website.</speak>',
        NEXT_RECIPE_MESSAGE: '<speak>Alles klar, welches Rezept möchtest du stattdessen kochen? Zur Auswahl stehen: <lang xml:lang="en-US">{{ recipes }}</lang></speak>',
        NO_NEXT_RECIPE: '<speak>Prima! Du hast den <lang xml:lang="en-US">Nutri Score</lang> dieses Rezepts von {{oldScore}} auf {{ newScore }} verbessert. Außerdem sparst du dir in etwa {{ reduce }} Kilojoule. Guten Appetit!</speak>',
        NO_RECIPE_CHOSEN: 'Super, lass uns kochen! Wonach steht dir denn der Sinn?',
        COOKING_MESSAGE: '<speak>Lass uns <lang xml:lang="en-US">{{recipe}}</lang> kochen! Wie ich sehe benutzt du {{ingredient}} in deinem <phoneme alphabet="ipa" ph="ʁeˈt͡sɛpt">Rezept</phoneme>. Wusstest du, dass es gesündere Alternativen gibt? Willst du {{ingredient}} nicht durch etwas Gesünderes ersetzen?</speak>',
        COOKING_MESSAGE_NOSUB: '<speak>Wie ich sehe hast du dein <phoneme alphabet="ipa" ph="ʁeˈt͡sɛpt">Rezept</phoneme> <lang xml:lang="en-US">{{recipe}}</lang> bereits ideal verbessert. Möchtest du ein anderes Gericht versuchen?</speak>',
        COOKING_REPROMPT: '<speak>Sag ja, wenn du dein <phoneme alphabet="ipa" ph="ʁeˈt͡sɛpt">Rezept</phoneme> verbessern willst, oder nein, wenn du es beibehalten möchtest. Du kannst auch auf unsere Website gehen und weitere Substitute Optionen nutzen.</speak>',
        SELECT_SUBSTITUTE_MESSAGE: '<speak>Sag 1, 2, oder 3 um eines der folgenden <lang xml:lang="en-US">Substitutes</lang> auszuwählen: {{ substitutes }}</speak>',
        SUBSTITUTE_MESSAGE_SUCCESS: 'Super, ich habe  {{ original }} durch {{ substitute }} ersetzt',
        NO_SUBSTITUTE_MESSAGE: '<speak>Kein Problem, ich werde in Zukunft hierfür keine <lang xml:lang="en-US">Substitutes</lang> mehr vorschlagen.</speak>', // in Zukunft nichtmehr vorgeschlagen
        PITCH_MESSAGE: '<speak>Fudo ist dein Ernährungsexperte, dein Gefährte, dein Sam zu deinem Frodo, ich persönlich kann mir Fudo nicht mehr weg denken in meinem Leben, die App hilft mir meine Rezepte zu verwalten, sie iterativ zu verbessern und mich über neue Substitute zu informieren. Fudo ist mein eigen. Mein <say-as interpret-as="interjection">Schatz!</say-as></speak>',
        NUTRI_SCORE_MESSAGE: '<speak>Der <lang xml:lang="en-US">Nutri Score</lang> ist eine Notenskala für Zutaten und Lebensmittel, die bezüglich ihrer Inhaltsstoffe bewertet werden. Die Skala geht von 0 bis 15 und ordnet Lebensmittel in die Noten A bis D ein, wobei A für sehr gesund und D für sehr ungesund steht. Ich benutze den <lang xml:lang="en-US">Nutri Score</lang> als Bewertungsschema für die <lang xml:lang="en-US">Substitutes</lang></speak>',
        POTATOE_MESSAGE: '<speak><audio src="https://elasticbeanstalk-eu-central-1-483497224686.s3.eu-central-1.amazonaws.com/ApRo2a8h-toeften-response.mp3"/></speak>',
        WRONG_RECIPE: '<speak>Tut mir leid aber dieses <phoneme alphabet="ipa" ph="ʁeˈt͡sɛpt">Rezept</phoneme> kenne ich leider nicht. Frag mich einfach welche <phoneme alphabet="ipa" ph="ʁeˈt͡sɛptə">Rezepte</phoneme> ich kenne. </speak>',
    },
};

module.exports = {
    deData,
};
