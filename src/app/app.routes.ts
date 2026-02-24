import { Routes } from '@angular/router';
import { LoginPage } from './login/login';
import{ Signup} from './signup/signup';
export const routes: Routes = [
    {
        path: '',
        component: LoginPage

    },
    {
        path:'signup',
        component: Signup
    }
];