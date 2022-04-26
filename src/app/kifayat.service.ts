import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class KifayatService {
  constructor(private http: HttpClient) {}

  getProductsData(data: any) {
    return this.http.get(
      'https://backendapi.turing.com/products/inCategory/' + data + '?limit=50'
    );
  }
}
