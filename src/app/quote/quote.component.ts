import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  quotes: Quote[] = [
    new Quote (1, 'The purpose of our lives is to be happy', 'Dalai Lama'),
    new Quote (2, 'Many of failures in life are people who did not realise how close they were to success when they gave up', 'Thomas Edison'),
    new Quote (3, 'Not how long but how well you have lived is the thing', 'Seneca')
  ];

  toggleDetails(index: number) {
    this.quotes[index].showAuthor = !this.quotes[index].showAuthor;
  }

  deleteQuote(isComplete: any, index: number) {
    this.quotes.splice(index, 1);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
