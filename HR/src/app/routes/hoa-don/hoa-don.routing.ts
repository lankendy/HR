import { Routes, RouterModule } from '@angular/router';
import { ChiTietHoaDonComponent } from './chi-tiet-hoa-don/chi-tiet-hoa-don.component';
import { DanhSachHoaDonComponent } from './danh-sach-hoa-don/danh-sach-hoa-don.component';
import { ThemHoaDonComponent } from './them-hoa-don/them-hoa-don.component';

const routes: Routes = [
  { path: 'danh-sach-hoa-don', component: DanhSachHoaDonComponent },
  { path: 'chi-tiet-hoa-don', component: ChiTietHoaDonComponent},
  { path: 'them-hoa-don', component: ThemHoaDonComponent}
];

export const HoaDonRoutes = RouterModule.forChild(routes);
