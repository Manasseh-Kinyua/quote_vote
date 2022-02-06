import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  quotes: Quote[] = [
    {id: 1, name:'The purpose of our lives is to be happy', author:'Dalai Lama'},
    {id: 2, name:'Many of failures in life are people who did not realise how close they were to success when they gave up', author:'Thomas Edison'},
    {id: 3, name:'Not how long but how well you have lived is the thing', author:'Seneca'}
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
