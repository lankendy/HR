import { Routes, RouterModule } from '@angular/router';
import { ChiTietSanPhamComponent } from './chi-tiet-san-pham/chi-tiet-san-pham.component';
import { DsSanPhamComponent } from './ds-san-pham/ds-san-pham.component';
import { ThemSanPhamComponent } from './them-san-pham/them-san-pham.component';

const routes: Routes = [
  { path: 'danh-sach-san-pham', component: DsSanPhamComponent },
  { path: 'chi-tiet-san-pham', component: ChiTietSanPhamComponent},
  { path: 'them-san-pham', component: ThemSanPhamComponent}
];

export const SanPhamRoutes = RouterModule.forChild(routes);
