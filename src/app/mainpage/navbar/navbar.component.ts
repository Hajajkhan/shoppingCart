import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { NavbardialogComponent } from './navbardialog/navbardialog.component';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { KifayatService } from 'src/app/kifayat.service';
import { loadProducts } from '../sidebar/store/kifayat.actions';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  searchProduct: any = '';
  arrayOfProducts: any[] = [];
  prodctdata: any[] = [];
  countedProducts: any;
  searchedArray: any[] = [];
  products: any[] = [];

  $product: Observable<any> = this.store.select((state: any) => {
    return state.products.products;
  });

  constructor(
    public dialog: MatDialog,
    private store: Store,
    private service: KifayatService
  ) {}

  ngOnInit(): void {
    // this.products = this.service.array;
    this.$product.subscribe((data) => {
      this.arrayOfProducts = data;
    });
  }
  openDialog() {
    const dialogRef = this.dialog.open(NavbardialogComponent);
    dialogRef.afterClosed().subscribe((result) => {});
    this.products = this.service.array;
    console.log('CCC', this.products);
  }

  searchdata() {
    // this.store.dispatch(loadProducts( {data: this.searchProduct}))
    this.service.getSearchedData(this.searchProduct);
  }
}
