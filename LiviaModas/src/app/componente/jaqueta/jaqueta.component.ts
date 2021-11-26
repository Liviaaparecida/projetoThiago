import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-jaqueta',
  templateUrl: './jaqueta.component.html',
  styleUrls: ['./jaqueta.component.css']
})
export class JaquetaComponent implements OnInit {

  roupas:any = [
    {
      img:'assets/jaqueta/j1.jpg',
      produto: 'Jaqueta couro preto ziper'
    },
    {
      img:'assets/jaqueta/j2.jpg',
      produto: 'Jaqueta acolchoada inverno pesado'
    },
    {
      img:'assets/jaqueta/j3.jpg',
      produto: 'Jaqueta Jeans botões'
    },
    {
      img:'assets/jaqueta/j4.jpg',
      produto: 'Jaqueta rosa ziper'
    },
    {
      img:'assets/jaqueta/j5.jpg',
      produto: 'Jaqueta corta vento preta'
    },
    {
      img:'assets/jaqueta/j6.jpg',
      produto: 'Jaqueta preto camurça'
    },
    {
      img:'assets/jaqueta/j7.jpg',
      produto: 'Jaqueta acolchoada roxa'
    },
    {
      img:'assets/jaqueta/j8.jpg',
      produto: 'Jaqueta social trabalho'
    },
    {
      img:'assets/jaqueta/j9.jpg',
      produto: 'Jaqueta acolchoada ziper'
    },
    {
      img:'assets/jaqueta/j10.jpg',
      produto: 'Jaqueta corta vento montanha vermelha'
    },
  ]
  
  constructor() { }

  ngOnInit(): void {
  }

}
