/* @TODO replace with your variables
 * ensure all variables on this page match your project
 */

export const environment = {
  production: false,
  apiServerUrl: 'http://127.0.0.1:5000', // the running FLASK api server url
  auth0: {
    url: 'fsnd-cofee.us', // the auth0 domain prefix
    audience: 'coffeeapi', // the audience set for the auth0 app
    clientId: 'XmarrV51jrvfohel2N5pyOKpRSt5BpcS', // the client id generated for the auth0 app
    callbackURL: 'https://127.0.0.1:8100/', // the base url of the running ionic application.
    callbackPath: 'login-results' 
  }
};