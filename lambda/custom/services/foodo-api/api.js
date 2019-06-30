import { isDevelopment } from '../../utilities/env';

export const API = isDevelopment ? 'http://localhost:3333/' : process.env.REACT_APP_BACKEND_API;
export const ENDPOINTS = {
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
    INGREDIENTS: 'ingredients',
    CATEGORIES: 'categories',
    INGREDIENT_BY_GROUPS: 'ingredients/groups/',
};
