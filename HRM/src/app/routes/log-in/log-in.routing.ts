import { LogInComponent } from './log-in/log-in.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '', component: LogInComponent
  },
];

export const LogInRoutes = RouterModule.forChild(routes);
