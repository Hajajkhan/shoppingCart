import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  array:any[]= [
    {
      name: 'departments',
    },
    {
      name: 'categories',
    },
    {
      name: 'attributes',
    },
    {
      name: 'products',
    },
    {
      name: 'customers',
    },
    {
      name: 'orders',
    },
    {
      name: 'shoppingcart',
    },
    {
      name: 'tax',
    },
    {
      name: 'shipping',
    },
    {
      name: 'stripe',
    },
   
    {
      name: 'shoppingcart',
    },
  ];
  

  constructor() { }

  ngOnInit(): void {
  }

}
