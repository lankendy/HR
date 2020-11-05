import { ChiTietBangLuongComponent } from './chi-tiet-bang-luong/chi-tiet-bang-luong.component';
import { BangLuongComponent } from './bang-luong/bang-luong.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path: 'bang-luong', component: BangLuongComponent},
  {path: 'chi-tiet-bang-luong', component: ChiTietBangLuongComponent}

];

export const LuongRoutes = RouterModule.forChild(routes);
