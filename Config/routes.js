import {
  HomePage,
  LoginPage,
  RegisterPage
} from '../Pages';
import baseUrl from './baseUrl';

export const routes = {
  DEFAULT: { path: baseUrl.DEFAULT, component: HomePage },
  HOME: { path: baseUrl.HOME, component: HomePage },
  LOGIN: { path: baseUrl.LOGIN, component: LoginPage },
  REGISTER: { path: baseUrl.REGISTER, component: RegisterPage },
};
