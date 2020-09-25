import { Routes, RouterModule } from '@angular/router';
import { ChiTietHoSoComponent } from './chi-tiet-ho-so/chi-tiet-ho-so.component';
import { DsHoSoComponent } from './ds-ho-so/ds-ho-so.component';
import { ThemHoSoComponent } from './them-ho-so/them-ho-so.component';

const routes: Routes = [
  { path: 'danh-sach-ho-so', component: DsHoSoComponent },
  { path: 'chi-tiet-ho-so', component: ChiTietHoSoComponent},
  { path: 'them-ho-so', component: ThemHoSoComponent}
];

export const QuanLiHoSoRoutes = RouterModule.forChild(routes);
