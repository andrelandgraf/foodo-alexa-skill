const env = require( '../../env' );

const API = env.BACKEND_API;
const ENDPOINTS = {
    AUTHENTICATE: 'auth/token',
    AUTHORIZE: 'auth/authorize',
    USER: 'user',
    USER_ENDPOINTS: {
        ME: '/me',
        GOAL: '/goal',
        LIFESTYLE: '/lifestyle',
        DISLIKES: '/dislikes',
        ALLERGIES: '/allergies',
        LOCALE: '/locale',
        RECIPES: '/recipes',
    },
    GOALS: 'goals',
    LIFESTYLES: 'lifestyles',
    ALLERGIES: 'allergies',
    RECIPES: 'recipes',
    RECIPES_ENDPOINTS: {
        SUBSTITUTES: '/substitutes',
    },
    COOKING: 'cooking',
    COOKING_ENDPOINTS: {
        START: '/start',
        SUBSTITUTES: '/substitutes',
        SUBSTITUTE: '/substitute/',
        BLOCK: '/block',
    },
    INGREDIENTS: 'ingredients',
    CATEGORIES: 'categories',
    INGREDIENT_BY_GROUPS: 'ingredients/groups/',
};

module.exports = {
    API,
    ENDPOINTS,
};
