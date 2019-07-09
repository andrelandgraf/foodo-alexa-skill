const HTTP_CODE_UNAUTHORIZED = 401;
const HTTP_CODE_SERVICE_UNAVAILABLE = 503;

const isNetworkError = err => ( err.message === 'Network Error' )
    || ( err.response && Number( err.response.status ) === HTTP_CODE_SERVICE_UNAVAILABLE );

const isUnauthorizedError = status => Number( status ) === HTTP_CODE_UNAUTHORIZED;

module.exports = {
    HTTP_CODE_SERVICE_UNAVAILABLE,
    HTTP_CODE_UNAUTHORIZED,
    isNetworkError,
    isUnauthorizedError,
};