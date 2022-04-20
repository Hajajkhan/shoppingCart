import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { NavbarComponent } from './navbar/navbar.component';
import { HomePageComponent } from './home-page/home-page.component';
import { FormsModule } from '@angular/forms';

import {MatToolbarModule} from '@angular/material/toolbar';
import {MatDialogModule} from '@angular/material/dialog';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import { DialogComponent } from './navbar/dialog/dialog.component';
import {MatButtonModule} from '@angular/material/button';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import { PaymentMethodComponent } from './navbar/dialog/payment-method/payment-method.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomePageComponent,
    DialogComponent,
    PaymentMethodComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,FormsModule,MatTableModule,
    BrowserAnimationsModule,
    MatDialogModule,MatToolbarModule,MatIconModule,MatInputModule,MatButtonModule,MatPaginatorModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
