import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./form/home.component";
import {CustomerComponent} from "./customer/customer.component";
import {OrderComponent} from "./order/order.component";
import {NotFoundComponent} from "./not-found/not-found.component";

const routes: Routes = [
  {path:'',redirectTo:'/home',pathMatch:'full'},
  {path:'home',component:HomeComponent},
  {path:'customer',component:CustomerComponent},
  {path:'orders',component:OrderComponent},
  {path:'**',component:NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
