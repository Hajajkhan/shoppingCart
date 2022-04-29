import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class KifayatService {
  constructor(private http: HttpClient) {}

  array: any[] = [];
  serachedArray: any[] = [];
  reviews:any[]=[];
  countedProducts:any;
  arrayOfProducts:any;

  //Main dispatch the action for getting Products
  getProductsData(data: any) {
    if (data != null) {
      return this.http.get(
        'https://backendapi.turing.com/products/inCategory/' +
          data +
          '?limit=50'
      );
    } else {
      return this.http.get('https://backendapi.turing.com/products?limit=100');
    }
  }

  //searching products By Seaarch API
  getSearchedData(data: any) {
    return this.http
      .get<any>(
        'https://backendapi.turing.com/products/search?query_string=' + data
      )
      // .subscribe((data) => {
        
        // this.serachedArray = data.rows;
      //   this.serachedArray = data.rows;
      // });
  }


  getDataForSharingToComponents(data: any, arrayOfProducts:any) {
    this.array = data;
    this.arrayOfProducts = arrayOfProducts;
  }


  //getting Reviews on the click of view Detail option in SideBar Component
  gettingReviews(data:any){
    return this.http.get<any>("https://backendapi.turing.com/products/"+data+"/reviews").subscribe(data=>{
      console.log("service", data);
      this.reviews=data;
    });
  }

  gettingCount(count:any){
    this.countedProducts=count;
  }
}
