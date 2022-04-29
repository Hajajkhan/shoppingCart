import { Component, OnInit } from '@angular/core';
import { KifayatService } from 'src/app/kifayat.service';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}
  const ELEMENT_DATA: PeriodicElement[] = [];

@Component({
  selector: 'app-navbardialog',
  templateUrl: './navbardialog.component.html',
  styleUrls: ['./navbardialog.component.css']
})
export class NavbardialogComponent implements OnInit {

  array:any[]=[];
  
  displayedColumns: string[] = ['name', 'discounted_price'];
  dataSource = ELEMENT_DATA;
  

  constructor(private service:KifayatService) { }

  ngOnInit(): void {
    this.array= this.service.array;
      console.log("dialo", this.array);
  }

}
