import { Routes } from '@angular/router';
import { Stack } from './stack/stack';
import { Home } from './home/home'; 
import { Services } from './services/services';
import { Login } from './login/login';

export const routes: Routes = [
  {path:'',redirectTo:'login', pathMatch: 'full'},
     { path: 'login', component: Login },
   {  path: 'home',  component: Home},
      { path: 'dashboard', component: Stack },
   { path: 'services',  component: Services}
];
