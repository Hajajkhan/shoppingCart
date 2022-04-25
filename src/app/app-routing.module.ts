import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartpaymentmethodComponent } from './mainpage/navbar/navbardialog/cartpaymentmethod/cartpaymentmethod.component';
import { MainpageComponent } from './mainpage/mainpage.component';

const routes: Routes = [
  {path:"", component:MainpageComponent },
  {path:"paymentMethod", component:CartpaymentmethodComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
