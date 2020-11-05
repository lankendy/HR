import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { DashboardComponent } from './dashboard/dashboard/dashboard.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
      {path: '', redirectTo: '/dashboard', pathMatch: 'full'},
      {path: 'dashboard', component: DashboardComponent},
        //nhan vien
      {path: 'nhan-vien', loadChildren: () => import('./nhan-vien/nhan-vien.module').then(m => m.NhanVienModule)},
      {path: 'ho-so', loadChildren: () => import('./quan-li-ho-so/quan-li-ho-so.module').then(m => m.QuanLiHoSoModule)},
      {path: 'tai-khoan', loadChildren: () => import('./tai-khoan/tai-khoan.module').then(m => m.TaiKhoanModule)},
      {path: 'san-pham', loadChildren: () => import('./quan-li-san-pham/san-pham.module').then(m => m.SanPhamModule)},
      {path: 'hoa-don', loadChildren: () => import('./hoa-don/hoa-don.module').then(m => m.HoaDonModule)},
      {path: 'su-kien', loadChildren: () => import('./su-kien/su-kien.module').then(m => m.SuKienModule)},
      {path: 'chuc-vu', loadChildren: () => import('./chuc-vu/chuc-vu.module').then(m => m.ChucVuModule)},
      {path: 'luong', loadChildren: () => import('./luong/luong.module').then(m => m.LuongModule)},
      {path: 'danh-muc-khac', loadChildren: () => import('./quan-li-che-do-lam-viec/quan-li-che-do-lam-viec.module').then(m => m.QuanLiCheDoLamViecModule)},
      {path: '**', component: PageNotFoundComponent}
];

export const RoutesRoutes = RouterModule.forChild(routes);
