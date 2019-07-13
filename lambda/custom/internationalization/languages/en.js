const enData = {
    translation: {
        SKILL_NAME: 'foodo',
        HELP_MESSAGE: 'Just ask me which recipes I know, or tell me what you would like to cook today.',
        HELP_REPROMPT: 'What would you like to cook today?',
        FALLBACK_MESSAGE: 'Just ask me which recipes I know, or tell me what you would like to cook today.',
        FALLBACK_REPROMPT: 'What can I help you with?',
        ERROR_MESSAGE: '<speak>Sorry, an error occurred. <say-as interpret-as="interjection">Duh.</say-as></speak>',
        STOP_MESSAGE: 'Have a nice day!',
        LAUNCH_MESSAGE: '<speak>Hello {{name}} and welcome to Foodo <audio src="soundbank://soundlibrary/magic_spells/magic_spells_14"/> What would you like to eat today?</speak>',
        LAUNCH_REPROMT: 'If you dont know what you would like to eat, just ask me which recipes I know.',
        RECIPE_MESSAGE: 'I know the following recipes: {{ recipes }}',
        NEXT_RECIPE_MESSAGE: 'Awesome! Which one of the following recipes would you like to cook then? {{ recipes }}',
        RECIPE_REPROMPT: 'If you want to know all recipes, check out our Foodo website.',
        NO_NEXT_RECIPE: 'Ok great! Enjoy you meal.',
        NO_RECIPE_CHOSEN: "Awesome, let's cook! Which recipe would you like to cook?",
        COOKING_MESSAGE: 'Lets cook {{recipe}}! You are currently using {{ingredient}} in your recipe. Would you like to substitute {{ingredient}} with something more healthy?',
        COOKING_MESSAGE_NOSUB: '<speak>You are already done improving your recipe {{recipe}}. Would you like to try another recipe?</speak>',
        COOKING_REPROMPT: 'Just say yes, if you want to substitute, or no, if you want to leave everything as it is. Also, check out our Website for more substitutes.',
        SELECT_SUBSTITUTE_MESSAGE: '<speak>Say 1, 2, or 3 to select one of the following substitutes: {{ substitutes }}</speak>',
        SUBSTITUTE_MESSAGE_SUCCESS: 'Awesome! I substituted  {{ original }} with {{ substitute }}',
        NO_SUBSTITUTE_MESSAGE: "No Problem. I will remember that you don't like to substitute this ingredient.",
        PITCH_MESSAGE: 'Foodo is my nutrition expert, my personal companion, just the Sam to my Frodo, it helps me to cook it home, organizes my personal recipes and offers me new substitutes to become healthier over time. It is my precious!',
        NUTRI_SCORE_MESSAGE: 'The Nutri Score is a scala that rates ingredients and food items according to their bad fats. It goes from the scores 0 to 15 and categorizes the grades A to D, where A is healthy and D unhealthy. We use the Nutri Score to compute healthy substiutes for your personal recipes!',
        POTATOE_MESSAGE: '<speak><audio src="https://elasticbeanstalk-eu-central-1-483497224686.s3.eu-central-1.amazonaws.com/YdBsIzX0-taters-response.mp3"/></speak>',
    },
};

module.exports = {
    enData,
};
