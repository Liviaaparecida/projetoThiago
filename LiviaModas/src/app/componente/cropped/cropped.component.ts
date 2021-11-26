import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cropped',
  templateUrl: './cropped.component.html',
  styleUrls: ['./cropped.component.css']
})
export class CroppedComponent implements OnInit {

  roupas:any = [
    {
      img:'assets/cropped/cr1.jpg',
      produto: 'Cropped liso alça fina'
    },    {
      img:'assets/cropped/cr2.jpg',
      produto: 'Cropped meia manga'
    },    {
      img:'assets/cropped/cr3.jpg',
      produto: 'Cropped Xadres'
    },    {
      img:'assets/cropped/cr4.jpg',
      produto: 'Cropped estampado new york'
    },    {
      img:'assets/cropped/cr5.jpg',
      produto: 'Cropped ombreira preto'
    },    {
      img:'assets/cropped/cr6.jpg',
      produto: 'Cropped estampado flores'
    },    {
      img:'assets/cropped/cr7.jpg',
      produto: 'Cropped liso'
    },    {
      img:'assets/cropped/cr8.jpg',
      produto: 'Cropped liso alça fina'
    },    {
      img:'assets/cropped/cr9.jpg',
      produto: 'Cropped estampado dragões'
    },    {
      img:'assets/cropped/cr10.jpg',
      produto: 'Cropped estampado simples'
    },
  ]
  
  constructor() { }

  ngOnInit(): void {
  }

}
