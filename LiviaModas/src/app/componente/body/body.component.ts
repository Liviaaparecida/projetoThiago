import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {

  roupas:any = [
    {
      img:'assets/body/b1.jpg',
      produto: 'Body casual alça dupla estilizada cores'
    },
    {
      img:'assets/body/b2.jpg',
      produto: 'Body casual alça fina preta'
    },
    {
      img:'assets/body/b3.jpg',
      produto: 'Body festa manga longa azul'
    },
    {
      img:'assets/body/b4.jpg',
      produto: 'Body casual alça fina cores'
    },
    {
      img:'assets/body/b5.jpg',
      produto: 'Body estampado flores '
    },
    {
      img:'assets/body/b6.jpg',
      produto: 'Body social manga longa branco'
    },
    {
      img:'assets/body/b7.jpg',
      produto: 'Body renda preta'
    },
    {
      img:'assets/body/b8.jpg',
      produto: 'Body social preto '
    },
    {
      img:'assets/body/b9.jpg',
      produto: 'Body preto manga longa'
    },
    {
      img:'assets/body/b10.jpg',
      produto: 'Body renda azul'
    },
  ]
  
  constructor() { }

  ngOnInit(): void {
  }

}
