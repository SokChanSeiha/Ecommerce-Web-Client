import { Routes } from '@angular/router';
import { SigninPage } from './signin-page/signin-page';
import { SignupPage } from './signup-page/signup-page';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'sign-in',
    pathMatch: 'full',
  },
  {
    path: 'sign-in',
    component: SigninPage,
  },
  {
    path: 'sign-up',
    component: SignupPage,
  },
];