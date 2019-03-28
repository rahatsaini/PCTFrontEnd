import environment from './../../enviroments_';

let config = {
  // SPA related options
  // ===================
  // The SPA url to which the user is redirected after a successful login
  loginRedirect: '#/dashboard',
  // The SPA url to which the user is redirected after a successful logout
  logoutRedirect: '#/login',
  // The SPA route used when an unauthenticated user tries to access an SPA page that requires authentication
  loginRoute: '#/login',
  // Whether or not an authentication token is provided in the response to a successful signup
  loginOnSignup: true,
  // If loginOnSignup == false: The SPA url to which the user is redirected after a successful signup (else loginRedirect is used)
  signupRedirect: '#/login',
  // reload page when token expires. 0 = don't reload (default), 1 = do reload page
  expiredReload: 1,
  // reload page when storage changed aka login/logout in other tabs/windows. 0 = don't reload (default), 1 = do reload page
  storageChangedReload: 0,

  // API related options
  // ===================
  // This appends to the httpClient/endpoint base url, it does not override it.
  baseUrl: environment.api.endpoint,
  // The API endpoint to which login requests are sent
  loginUrl: '/api/claimant/9',
  // The API endpoint to which logout requests are sent (not needed for jwt)
  logoutUrl: '/api/account/logout',
  // The HTTP method used for 'unlink' requests (Options: 'get' or 'post')
  logoutMethod: 'post',
  // The API endpoint to which signup requests are sent
  signupUrl: '/api/account/register',
  // The API endpoint used in profile requests (inc. `find/get` and `update`)
  profileUrl: '/auth/me',
  // The method used to update the profile ('put' or 'patch')
  profileMethod: 'put',
  // The API endpoint used with oAuth to unlink authentication
  unlinkUrl: '/auth/unlink/',
  // The HTTP method used for 'unlink' requests (Options: 'get' or 'post')
  unlinkMethod: 'get',

  // Token Options
  // =============
  // The header property used to contain the authToken in the header of API requests that require authentication
  authHeader: 'Authorization',
  // The token name used in the header of API requests that require authentication
  authTokenType: 'Bearer',
  // The property from which to get the access token after a successful login or signup
  accessTokenProp: 'access_token',

  expiredRedirect: 1,
  //getExpirationDateFromResponse: function(response) { debugger; return response ? response.expires_in : null; }
  //getExpirationDateFromResponse: (response) => {return response ? new Date().getTime() + (response.expires_in * 1000) : null; }
};

export default config;