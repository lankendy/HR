import { ThemSuKienComponent } from './them-su-kien/them-su-kien.component';
import { Routes, RouterModule } from '@angular/router';
import { DsSuKienComponent } from './ds-su-kien/ds-su-kien.component';
import { ChiTietSuKienComponent } from './chi-tiet-su-kien/chi-tiet-su-kien.component';

const routes: Routes = [
  { path: 'danh-sach-su-kien', component: DsSuKienComponent },
  { path: 'them-su-kien', component: ThemSuKienComponent},
  { path: 'chi-tiet-su-kien', component: ChiTietSuKienComponent}
];

export const SuKienRoutes = RouterModule.forChild(routes);
