import { Routes } from '@angular/router';
import { Stack } from './stack/stack';
import { Home } from './home/home'; 
import { Services } from './services/services';

export const routes: Routes = [
       {
        path: 'stack',
        component: Stack
       },
        {
        path: '',
        component: Home
       },
        {
        path: 'services',
        component: Services
       }
];
