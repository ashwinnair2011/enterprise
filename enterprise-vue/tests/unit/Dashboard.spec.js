import { shallowMount } from '@vue/test-utils';
import DashboardScreen from '@/components/DashboardScreen.vue';
import { getUser, logout } from '@/auth'; // Ensure this path is correct for your setup

jest.mock('@/auth', () => ({
  getUser: jest.fn(),
  logout: jest.fn()
}));

describe('DashboardScreen.vue', () => {
  let wrapper;

  beforeEach(async () => {
    getUser.mockResolvedValue({ name: 'John Doe' }); // Mock the user data
    wrapper = shallowMount(DashboardScreen);
    await wrapper.vm.$nextTick(); // Wait for the next DOM update cycle
  });

  afterEach(() => {
    wrapper.unmount();  // Unmount the component after each test
  });

  it('renders the component correctly', () => {
    expect(wrapper.find('.dashboard-container').exists()).toBe(true);
    expect(wrapper.find('h2').text()).toBe('Welcome, John Doe!'); // Adjust to the mocked user name
    expect(wrapper.find('button').text()).toBe('Logout');
  });

  it('calls the logout method when the button is clicked', async () => {
    const logoutButton = wrapper.find('button');
    await logoutButton.trigger('click');
    expect(logout).toHaveBeenCalled();
  });

  it('sets the userName based on the getUser response', async () => {
    expect(wrapper.vm.userName).toBe('John Doe');
  });

  it('displays the correct username in the header', () => {
    expect(wrapper.find('h2').text()).toBe('Welcome, John Doe!');
  });
});
