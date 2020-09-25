import { ThemTaiKhoanComponent } from './them-tai-khoan/them-tai-khoan.component';
import { ChiTietTaiKhoanComponent } from './chi-tiet-tai-khoan/chi-tiet-tai-khoan.component';
import { DsTaiKhoanComponent } from './ds-tai-khoan/ds-tai-khoan.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'danh-sach-tai-khoan', component: DsTaiKhoanComponent },
  { path: 'chi-tiet-tai-khoan', component: ChiTietTaiKhoanComponent},
  { path: 'them-tai-khoan', component: ThemTaiKhoanComponent}
];

export const TaiKhoanRoutes = RouterModule.forChild(routes);
