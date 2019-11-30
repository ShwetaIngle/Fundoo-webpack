import { RouterModule, Routes } from '@angular/router';

import { cardComponent } from './component/card/card-component';
import { LoginComponent } from './component/login/login-component';
import { RegisterComponent } from './component/register/register-component';

const routes: Routes = [
    { 
        path:'', 
        redirectTo:'/card', 
        pathMatch:'full'
    },
    {
        path:'card',
        component: cardComponent
    },
    { 
        path: 'login', 
        component: LoginComponent
    },
    {
        path: 'register',
        component: RegisterComponent
    }
];
export const appRoutingModule = RouterModule.forRoot(routes);