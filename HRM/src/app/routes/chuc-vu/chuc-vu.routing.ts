import { ChiTietChucVuComponent } from './chi-tiet-chuc-vu/chi-tiet-chuc-vu.component';
import { ThemChucVuComponent } from './them-chuc-vu/them-chuc-vu.component';
import { DsChucVuComponent } from './ds-chuc-vu/ds-chuc-vu.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'danh-sach-chuc-vu', component: DsChucVuComponent },
  { path: 'them-chuc-vu', component: ThemChucVuComponent},
  { path: 'chi-tiet-chuc-vu', component: ChiTietChucVuComponent}
];

export const ChucVuRoutes = RouterModule.forChild(routes);
