import { Routes, RouterModule } from '@angular/router';
import { CheDoNgayLamViecComponent } from './che-do-ngay-lam-viec/che-do-ngay-lam-viec.component';

const routes: Routes = [
  { path: 'che-do-ngay-lam-viec', component: CheDoNgayLamViecComponent },
  { path: '',   redirectTo: '/danh-sach-nhan-vien', pathMatch: 'full' }
];

export const QuanLiCheDoLamViecRoutes = RouterModule.forChild(routes);
