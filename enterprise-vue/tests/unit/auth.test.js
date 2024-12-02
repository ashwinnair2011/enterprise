import { initAuth0, login, logout, isAuthenticated, getUser, handleRedirectCallback, auth0Client } from '@/auth'
//import { createAuth0Client } from '@auth0/auth0-spa-js'

jest.mock('@auth0/auth0-spa-js', () => ({
  createAuth0Client: jest.fn().mockResolvedValue({
    loginWithRedirect: jest.fn(),
    logout: jest.fn(),
    isAuthenticated: jest.fn().mockResolvedValue(true),
    getUser: jest.fn().mockResolvedValue({ name: 'Test User' }),
    handleRedirectCallback: jest.fn().mockResolvedValue({ appState: { targetUrl: '/' } })
  })
}));


describe('Auth0 Functions', () => {
    beforeAll(async () => {
      await initAuth0();
    });
  
    test('login should call loginWithRedirect', async () => {
      await login();
      expect(auth0Client.loginWithRedirect).toHaveBeenCalled();
    });
  
    test('logout should call logout with returnTo', () => {
      logout();
      expect(auth0Client.logout).toHaveBeenCalledWith({ returnTo: window.location.origin });
    });
  
    test('isAuthenticated should return true', async () => {
      const isAuthenticatedResult = await isAuthenticated();
      expect(isAuthenticatedResult).toBe(true);
    });
  
    test('getUser should return user data', async () => {
      const user = await getUser();
      expect(user).toEqual({ name: 'Test User' });
    });
  
    test('handleRedirectCallback should return appState', async () => {
      const result = await handleRedirectCallback();
      expect(result).toEqual({ appState: { targetUrl: '/' } });
    });
  });
