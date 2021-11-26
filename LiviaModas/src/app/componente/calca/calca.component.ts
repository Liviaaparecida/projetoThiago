import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calca',
  templateUrl: './calca.component.html',
  styleUrls: ['./calca.component.css']
})
export class CalcaComponent implements OnInit {

  roupas:any = [
    {
      img:'assets/calca/c1.jpg',
      produto: 'Calça Jeans rasgado'
    },
    {
      img:'assets/calca/c2.jpg',
      produto: 'Calça preta linha branca'
    },
    {
      img:'assets/calca/c3.jpg',
      produto: 'Calça vermelha xadres'
    },
    {
      img:'assets/calca/c4.jpg',
      produto: 'Calça social azul'
    },
    {
      img:'assets/calca/c5.jpg',
      produto: 'Calça escoteiro caqui'
    },
    {
      img:'assets/calca/c6.jpg',
      produto: 'Calça preta folgada'
    },
    {
      img:'assets/calca/c7.jpg',
      produto: 'Calça vermelha festa'
    },
    {
      img:'assets/calca/c8.jpg',
      produto: 'Calça social'
    },
    {
      img:'assets/calca/c9.jpg',
      produto: 'Calça verde oliva cintura alta'
    },
    {
      img:'assets/calca/c10.jpg',
      produto: 'Calça festa preta'
    },
  ]
  
  constructor() { }

  ngOnInit(): void {
  }

}
