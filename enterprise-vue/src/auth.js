import { createAuth0Client } from '@auth0/auth0-spa-js';

let auth0Client = null;

const initAuth0 = async () => {
  try {
    auth0Client = await createAuth0Client({
      domain: 'auth.lasercloud.com.au',
      clientId: 'VfuMhAzmCQuvvBNPiIfXA2qgkdcwsHOb',
      authorizationParams: {
        redirect_uri: `${window.location.origin}/callback`
      }
    });

    console.log('Auth0 Client:', auth0Client); // Verify initialization
  } catch (error) {
    console.error('Failed to initialize Auth0 client:', error);
  }
};

await initAuth0();

const login = async () => {
  await auth0Client.loginWithRedirect();
};

const logout = () => {
  auth0Client.logout({
    returnTo: window.location.origin
  });
};

const isAuthenticated = async () => {
  return await auth0Client.isAuthenticated();
};

const getUser = async () => {
  return await auth0Client.getUser();
};

const handleRedirectCallback = async () => {
  console.log('Handling redirect callback');
  const result = await auth0Client.handleRedirectCallback();
  console.log('Redirect Callback Result:', result); // Verify callback handling
  return result;
};



export { login, logout, isAuthenticated, getUser, handleRedirectCallback };
