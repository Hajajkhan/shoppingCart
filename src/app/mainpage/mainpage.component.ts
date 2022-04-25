import { Component, OnInit } from '@angular/core';
import { KifayatService } from '../kifayat.service';

@Component({
  selector: 'app-mainpage',
  templateUrl: './mainpage.component.html',
  styleUrls: ['./mainpage.component.css']
})
export class MainpageComponent implements OnInit {

  constructor(private service:KifayatService) { }

  ngOnInit(): void {
    // this.service.getdata().subscribe(data=>{
    //   console.log("data", data);
    // })
  }

}
