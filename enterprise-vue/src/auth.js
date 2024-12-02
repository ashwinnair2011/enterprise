import { createAuth0Client } from '@auth0/auth0-spa-js';

let auth0Client = null;

const initAuth0 = async () => {
  try {
    auth0Client = await createAuth0Client({
      domain: 'dev-fk4m6z4l1na0d6ja.us.auth0.com',
      clientId: 'VfuMhAzmCQuvvBNPiIfXA2qgkdcwsHOb',
      authorizationParams: {
        redirect_uri: window.location.origin
      }
    });

    console.log('Auth0 Client:', auth0Client); // Verify initialization
  } catch (error) {
    console.error('Failed to initialize Auth0 client:', error);
  }
};

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

initAuth0();

export { login, logout, isAuthenticated, getUser };
