import { shallowMount } from '@vue/test-utils';
import LoginScreen from '@/components/LoginScreen.vue';
import { login } from '@/auth'; // Ensure this path is correct for your setup

jest.mock('@/auth', () => ({
  login: jest.fn()
}));

describe('LoginScreen.vue', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallowMount(LoginScreen);
  });

  afterEach(() => {
    wrapper.unmount();
  });

  it('renders the component correctly', () => {
    expect(wrapper.find('.login-container').exists()).toBe(true);
    expect(wrapper.find('h2').text()).toBe('Login');
    expect(wrapper.find('button').text()).toBe('Login with Auth0');
  });

  it('calls the login method when the button is clicked', async () => {
    const loginButton = wrapper.find('button');
    await loginButton.trigger('click');
    expect(login).toHaveBeenCalled();
  });
});
