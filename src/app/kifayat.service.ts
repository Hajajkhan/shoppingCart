import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class KifayatService {
  constructor(private http: HttpClient) {}

  //Fetching Default data of hundreds products
  getDefaultProducts() {
    return this.http.get('https://backendapi.turing.com/products?limit=100');
  }

  //Main dispatch the action for getting Products
  getProductsData(category: any) {
    return this.http.get(
      'https://backendapi.turing.com/products/inCategory/' +
        category +
        '?limit=50'
    );
  }

  //searching products By Seaarch API
  getSearchedData(data: any) {
    return this.http.get<any>(
      'https://backendapi.turing.com/products/search?query_string=' + data
    );
  }

  //getting Reviews on the click of view Detail option in SideBar Component
  gettingReviews(data: any) {
    return this.http.get<any>(
      'https://backendapi.turing.com/products/' + data + '/reviews'
    );
  }
}
