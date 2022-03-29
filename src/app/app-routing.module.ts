import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MapsComponent} from './LoginComponent/maps/maps.component'
import {LoginComponent} from './LoginComponent/login/login.component'
import { UserGuardGuard } from './user-guard.guard';

const routes: Routes = [
  { path:'maps',component:MapsComponent, canActivate: [UserGuardGuard]},
  { path:'login',component:LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
