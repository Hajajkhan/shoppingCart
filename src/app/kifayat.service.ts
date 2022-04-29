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
  countedProducts:any= this.array.length;
  arrayOfProducts:any;
  searchedWords:any;

  //searching products By Seaarch API
  getSearchedData(data: any) {
    this.searchedWords=data;
    return this.http
    .get<any>(
      'https://backendapi.turing.com/products/search?query_string=' + data
    )
    .subscribe((data) => {
      this.serachedArray = data.rows;
      console.log("Ff", this.serachedArray);
    });
    
  }

  //Main dispatch the action for getting Products
  getProductsData(data: any) {
    let result;
    if (data != null) {
      return this.http.get(
        'https://backendapi.turing.com/products/inCategory/' +
          data +
          '?limit=50'
      )
    } else {
     return this.http.get('https://backendapi.turing.com/products?limit=100');
    }
  }

  getDataForSharingToComponents(data: any, arrayOfProducts:any) {
    this.array = data;
    console.log("Arr", this.array.length);
    this.arrayOfProducts = arrayOfProducts;
  }


  //getting Reviews on the click of view Detail option in SideBar Component
  gettingReviews(data:any){
    return this.http.get<any>("https://backendapi.turing.com/products/"+data+"/reviews").subscribe(data=>{
      console.log("service", this.countedProducts);
      this.reviews=data;
    });
  }

  gettingCount(count:any){
  }
}
