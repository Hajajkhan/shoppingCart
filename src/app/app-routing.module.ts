import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartpaymentmethodComponent } from './mainpage/navbar/navbardialog/cartpaymentmethod/cartpaymentmethod.component';
import { MainpageComponent } from './mainpage/mainpage.component';
import { SnapshotDetailComponent } from './snapshot-detail/snapshot-detail.component';

const routes: Routes = [
  { path: '', component: MainpageComponent },
  { path: 'paymentMethod', component: CartpaymentmethodComponent },
  { path: 'productdetail/:id', component: SnapshotDetailComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
