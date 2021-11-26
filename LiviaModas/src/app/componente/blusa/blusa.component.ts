import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blusa',
  templateUrl: './blusa.component.html',
  styleUrls: ['./blusa.component.css']
})
export class BlusaComponent implements OnInit {

  roupas:any = [
    {
      img:'assets/blusa/bl1.jpg',
      produto: 'Blusa rosa com capuz'
    },
    {
      img:'assets/blusa/bl2.jpg',
      produto: 'Blusa ziper diagonal com capuz'
    },
    {
      img:'assets/blusa/bl3.jpg',
      produto: 'Blusa preta ziper'
    },
    {
      img:'assets/blusa/bl4.jpg',
      produto: 'Blusa vinho lisa'
    },
    {
      img:'assets/blusa/bl5.jpg',
      produto: 'Blusa rosa flor bordada'
    },
    {
      img:'assets/blusa/bl6.jpg',
      produto: 'Blusa cinza ziper com capuz'
    },
    {
      img:'assets/blusa/bl7.jpg',
      produto: 'Blusa social vermelha'
    },
    {
      img:'assets/blusa/bl8.jpg',
      produto: 'Blusa adidas preta'
    },
    {
      img:'assets/blusa/bl9.jpg',
      produto: 'Blusa cinza fina'
    },
    {
      img:'assets/blusa/bl10.jpg',
      produto: 'Blusa marrom '
    },    
  ]
  
  constructor() { }

  ngOnInit(): void {
  }

}
