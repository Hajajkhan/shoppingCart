import { Component, OnInit } from '@angular/core';
import { SideBarData } from 'src/app/data.state';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
 array:any[]=SideBarData;
  constructor() { }

  ngOnInit(): void {
    console.log(this.array)
  }

}
