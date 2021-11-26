import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shorts',
  templateUrl: './shorts.component.html',
  styleUrls: ['./shorts.component.css']
})
export class ShortsComponent implements OnInit {

  roupas:any = [
    {
      img:'assets/short/s1.jpg',
      produto: 'Jeans casual'
    },
    {
      img:'assets/short/s2.jpg',
      produto: 'Short liso '
    },
    {
      img:'assets/short/s3.jpg',
      produto: 'Short festa fenda lateral'
    },
    {
      img:'assets/short/s4.jpg',
      produto: 'Short moleton casual'
    },
    {
      img:'assets/short/s5.jpg',
      produto: 'Short seda'
    },
    {
      img:'assets/short/s6.jpg',
      produto: 'Short liso casual'
    },
    {
      img:'assets/short/s7.jpg',
      produto: 'Short Jeans babado'
    },
    {
      img:'assets/short/s8.jpg',
      produto: 'Short Jeans lixa'
    },
    {
      img:'assets/short/s9.jpg',
      produto: 'Short esportivo'
    },
    {
      img:'assets/short/s10.jpg',
      produto: 'Short casual laço'
    },
  ]
  
  constructor() { }

  ngOnInit(): void {
  }

}
