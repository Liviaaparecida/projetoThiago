import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-acessorios',
  templateUrl: './acessorios.component.html',
  styleUrls: ['./acessorios.component.css']
})
export class AcessoriosComponent implements OnInit {

  roupas:any = [
    {
      img:'assets/acessorios/bo1.jpg',
      produto: 'Bolsa chanel branca'
    },
    {
      img:'assets/acessorios/bo2.jpg',
      produto: 'Bolsa grande rosa'
    },
    {
      img:'assets/acessorios/bo3.jpg',
      produto: 'Bolsa festa branca'
    },
    {
      img:'assets/acessorios/bo4.jpg',
      produto: 'Bolsa festa black'
    },
    {
      img:'assets/acessorios/bo5.jpg',
      produto: 'Bolsa festa preta'
    },
    {
      img:'assets/acessorios/col10.jpg',
      produto: 'Colar de corações'
    },
    {
      img:'assets/acessorios/re6.jpg',
      produto: 'Relógio Ouro'
    },
    {
      img:'assets/acessorios/re7.jpg',
      produto: 'Relógio Cristal'
    },
    {
      img:'assets/acessorios/re8.jpg',
      produto: 'Relógio Xiaomi digital'
    },
    {
      img:'assets/acessorios/to9.jpg',
      produto: 'Tocas de lã'
    },
  ]
  
  constructor() { }

  ngOnInit(): void {
  }

}
