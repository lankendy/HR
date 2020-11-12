import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AuthGuardService as AuthGuard} from './services/auth-guard/auth-guard.service';

const routes: Routes = [
  { path: 'dashboard', loadChildren: () => import('./routes/layout/layout.module').then(m => m.LayoutModule), canActivate: [AuthGuard]},
  { path: 'login', loadChildren: () => import('./routes/log-in/log-in.module').then(m => m.LogInModule)},
  { path: '', pathMatch: 'full', redirectTo: 'login'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
