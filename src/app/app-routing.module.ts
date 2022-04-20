import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { PaymentMethodComponent } from './navbar/dialog/payment-method/payment-method.component';

const routes: Routes = [
  {path:"", component:HomePageComponent},
  {path:"paymentmethod", component:PaymentMethodComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
