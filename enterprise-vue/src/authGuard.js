import { isAuthenticated } from '@/auth';

const authGuard = async (to, from, next) => {
  if (await isAuthenticated()) {
    next();
  } else {
    next('/');
  }
};

export default authGuard;
