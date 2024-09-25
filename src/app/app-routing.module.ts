import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import path from 'path';
import { LoginComponent } from './login/login.component';
import { TankComponent } from './tank/tank.component';



const routes: Routes = [
  { path: '', component: LoginComponent }, 
   { path: 'tank', component: TankComponent }, 

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
