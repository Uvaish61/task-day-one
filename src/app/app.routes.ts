import { Routes } from '@angular/router';
import { LoginPage } from './login/login';
import { Signup } from './signup/signup';
import { Dashboard } from './dashboard/dashboard';
//import { Component } from '@angular/core';
import { authGuard } from './auth-guard';
import { dashboardExitGuard } from './dashboard-exit.guard';
export const routes: Routes = [
    {
        path: '',
        component: LoginPage

    },
    {
        path: 'signup',
        component: Signup
    },
    {
        path: 'dashboard',
        component: Dashboard,
        canActivate:[authGuard],
        canDeactivate:[dashboardExitGuard],

    }
];