import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-plussize',
  templateUrl: './plussize.component.html',
  styleUrls: ['./plussize.component.css']
})
export class PlussizeComponent implements OnInit {

  roupas:any = [
    {
      img:'assets/plussize/p1.jpg',
      produto: 'Conjunto Luxo'
    },
    {
      img:'assets/plussize/p2.jpg',
      produto: 'Body babado '
    },
    {
      img:'assets/plussize/p3.jpg',
      produto: 'Calça Jeans Branca'
    },
    {
      img:'assets/plussize/p4.jpg',
      produto: 'Vestido florido azul'
    },
    {
      img:'assets/plussize/p5.jpg',
      produto: 'Vestido preto com bolinhas'
    },
    {
      img:'assets/plussize/p6.jpg',
      produto: 'Macacão Jeans'
    },
    {
      img:'assets/plussize/p7.jpg',
      produto: 'Vestido Festa florido'
    },
    {
      img:'assets/plussize/p8.jpg',
      produto: 'Camisa estampada'
    },
    {
      img:'assets/plussize/p9.jpg',
      produto: 'Camisa preta Festa'
    },
    {
      img:'assets/plussize/p10.jpg',
      produto: 'Calça lag preta'
    },
  ]
  
  constructor() { }

  ngOnInit(): void {
  }

}
