import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-camisas',
  templateUrl: './camisas.component.html',
  styleUrls: ['./camisas.component.css']
})
export class CamisasComponent implements OnInit {

  roupas:any = [
    {
      img:'assets/T-shirt/t1.jpg',
      produto: 'Camisa estanpada Tigre'
    },
    {
      img:'assets/T-shirt/t2.jpg',
      produto: 'Camisa estanpada Gratidão'
    },
    {
      img:'assets/T-shirt/t3.jpg',
      produto: 'Camisa Listrada'
    },
    {
      img:'assets/T-shirt/t4.jpg',
      produto: 'Camisa COLCCI'
    },
    {
      img:'assets/T-shirt/t5.jpg',
      produto: 'Better Woman'
    },
    {
      img:'assets/T-shirt/t6.jpg',
      produto: 'Camisa Ela'
    },
    {
      img:'assets/T-shirt/t7.jpg',
      produto: 'Camisa Catfish'
    },
    {
      img:'assets/T-shirt/t8.jpg',
      produto: 'Camisa Lisa'
    },
    {
      img:'assets/T-shirt/t9.jpg',
      produto: 'FEMINIST'
    },
    {
      img:'assets/T-shirt/t10.jpg',
      produto: 'Camisa caveira'
    },
  ]
  
  constructor() { }

  ngOnInit(): void {
  }

}
