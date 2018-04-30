import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminComponent } from './admin/admin.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { UserGuard } from './services/user-auth-guard.service';

const routes: Routes = [
    {
        path: '',
        component: HomeComponent,
        pathMatch: 'full'
    },
    {
        path: 'admin',
        component: AdminComponent,
        canActivate: [UserGuard]
    },
    {
        path: 'login',
        component: LoginComponent
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
    providers: [UserGuard]
})
export class AppRoutingModule {}