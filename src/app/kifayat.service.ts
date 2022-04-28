import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class KifayatService {
  constructor(private http: HttpClient) {}

  array: any[] = [];
  serachedArray: any[] = [];

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
  getSearchedData(data: any) {
    return this.http
      .get<any>(
        'https://backendapi.turing.com/products/search?query_string=' + data
      )
      .subscribe((data) => {
        this.serachedArray = data.rows;
        // console.log("service", this.serachedArray);
      });
  }

  getDataForSharingToComponents(data: any) {
    this.array = data;
    // console.log("service", this.array);
  }
}
