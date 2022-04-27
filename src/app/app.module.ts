import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSelectModule } from '@angular/material/select';
import { MatStepperModule } from '@angular/material/stepper';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { NavbarComponent } from './mainpage/navbar/navbar.component';
import { MainpageComponent } from './mainpage/mainpage.component';
import { NavbardialogComponent } from './mainpage/navbar/navbardialog/navbardialog.component';
import { CartpaymentmethodComponent } from './mainpage/navbar/navbardialog/cartpaymentmethod/cartpaymentmethod.component';
import { SidebarComponent } from './mainpage/sidebar/sidebar.component';
import { EffectsModule } from '@ngrx/effects';
import { ProductEffects } from './mainpage/sidebar/store/kifayat.effects';
import { productReducer } from './mainpage/sidebar/store/kifayat.reducer';
import { SnapshotDetailComponent } from './snapshot-detail/snapshot-detail.component';
import {ScrollingModule} from '@angular/cdk/scrolling';
import { Ng2SearchPipeModule } from 'ng2-search-filter';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    MainpageComponent,
    NavbardialogComponent,
    CartpaymentmethodComponent,
    SidebarComponent,
    SnapshotDetailComponent,
  ],
  imports: [
    HttpClientModule,
    ScrollingModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    MatPaginatorModule,
    MatSelectModule,
    MatStepperModule,
    MatIconModule,
    MatToolbarModule,
    MatDialogModule,
    MatInputModule,
    MatButtonModule,
    MatTableModule,
    MatSidenavModule,
    MatListModule,
    MatCardModule,
    AppRoutingModule,
    Ng2SearchPipeModule,
    StoreModule.forRoot({ products: productReducer }, {}),
    BrowserAnimationsModule,
    EffectsModule.forRoot([ProductEffects]),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
