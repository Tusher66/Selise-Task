import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainPagComponent } from './main-pag/main-pag.component';

const routes: Routes = [
  {path:'',redirectTo:'main',pathMatch:'full'},
  // {path:'**',component:LoginComponent},
  {path:'main',component:MainPagComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
