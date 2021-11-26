import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-jaqueta',
  templateUrl: './jaqueta.component.html',
  styleUrls: ['./jaqueta.component.css']
})
export class JaquetaComponent implements OnInit {

  roupas:any = [
    {
      img:'assets/vestido/v1.jpg',
      produto: 'Vestido liso alça fina'
    },
    {
      img:'assets/vestido/v2.jpg',
      produto: 'Vestido florido ombreira'
    },
    {
      img:'assets/vestido/v3.jpg',
      produto: 'Vestido florido rosas manga longa'
    },
    {
      img:'assets/vestido/v4.jpg',
      produto: 'Vestido rosas sem manga'
    },
    {
      img:'assets/vestido/v5.jpg',
      produto: 'Vestido liso com gola'
    },
    {
      img:'assets/vestido/v6.jpg',
      produto: 'Vestido liso costas aberto'
    },
    {
      img:'assets/vestido/v7.jpg',
      produto: 'Vestido Festa com fenda'
    },
    {
      img:'assets/vestido/v8.jpg',
      produto: 'Vestido Festa alça fina'
    },
    {
      img:'assets/vestido/v9.jpg',
      produto: 'Vestido estampado longo'
    },
    {
      img:'assets/vestido/v10.jpg',
      produto: 'Vestido liso tomara que caia'
    },
  ]
  
  constructor() { }

  ngOnInit(): void {
  }

}
