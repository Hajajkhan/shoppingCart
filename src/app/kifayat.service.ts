import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class KifayatService {


  constructor(private http:HttpClient) { }

  getProductsData(){
   return this.http.get("https://backendapi.turing.com/products/inCategory/7?limit=50");
  }
  // getProductsByCategoryId(){
  //   return this.http.get("")
  // }
}
