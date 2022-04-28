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
  $product: Observable<any> = this.store.select((state: any) => {
    return state.products.products;
  });


  constructor(public dialog: MatDialog, private store:Store, private service:KifayatService) { }

  ngOnInit(): void {
    this.$product.subscribe((data) => {
      this.arrayOfProducts = data;
      // console.log("dataNav",data)
    });
  }
  openDialog() {
    const dialogRef = this.dialog.open(NavbardialogComponent);

    dialogRef.afterClosed().subscribe(result => {
      // console.log(`Dialog result: ${result}`);

    });
  }
  searchdata(){
    this.service.getSearchedData(this.searchProduct);
    }
    // this.prodctdata=[];
    //   this.arrayOfProducts.filter((item) => {
    //     if ((item.name.toLowerCase()).includes(this.searchProduct.toLowerCase())||(item.name.toLowerCase())==this.searchProduct) {
    //     this.prodctdata.push(item);
    //     }
    //  })
    //  console.log("array", this.arrayOfProducts);
    //  console.log(this.prodctdata)

}
