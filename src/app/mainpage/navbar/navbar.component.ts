import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { NavbardialogComponent } from './navbardialog/navbardialog.component';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { KifayatService } from 'src/app/kifayat.service';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
 
export class NavbarComponent implements OnInit {
  
  searchProduct:any='';
  arrayOfProducts:any[]=[];
  prodctdata:any[]=[]
  countedProducts:any;
  searchedArray:any[]=[];
  products:any[]=[];

  $product: Observable<any> = this.store.select((state: any) => {
    return state.products.products;
  });


  constructor(public dialog: MatDialog, private store:Store, private service:KifayatService) { }

  ngOnInit(): void {
    this.$product.subscribe((data) => {
      this.arrayOfProducts = data;
    });
    this.countedProducts = this.service.countedProducts;
  }
  openDialog() {
    const dialogRef = this.dialog.open(NavbardialogComponent);
    dialogRef.afterClosed().subscribe(result => {
    });
  }

  searchdata(){
    this.service.getSearchedData(this.searchProduct).subscribe(data=>{
      this.searchedArray = data.rows;
      console.log("FF", this.searchedArray);
    });
   this.products = this.service.arrayOfProducts;
   console.log("##", this.products);
  }
}
