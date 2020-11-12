import { DangKiLichLamViecComponent } from './dang-ki-lich-lam-viec/dang-ki-lich-lam-viec.component';
import { ChiTietNhanVienComponent } from './chi-tiet-nhan-vien/chi-tiet-nhan-vien.component';
import { DsNhanVienComponent } from './ds-nhan-vien/ds-nhan-vien.component';
import { Routes, RouterModule } from '@angular/router';
import { ThemNhanVienComponent } from './them-nhan-vien/them-nhan-vien.component';

const routes: Routes = [
  { path: 'danh-sach-nhan-vien', component: DsNhanVienComponent },
  { path: 'chi-tiet-nhan-vien', component: ChiTietNhanVienComponent },
  { path: 'them-moi-nhan-vien', component: ThemNhanVienComponent },
  { path: 'dang-ki-lich-lam-viec', component: DangKiLichLamViecComponent},
];

export const NhanVienRoutes = RouterModule.forChild(routes);
