import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  quotes: Quote[] = [
    new Quote (1, 'The purpose of our lives is to be happy', 'Dalai Lama', new Date(2022, 2, 6)),
    new Quote (2, 'Many of failures in life are people who did not realise how close they were to success when they gave up', 'Thomas Edison', new Date(2022, 2, 6)),
    new Quote (3, 'Not how long but how well you have lived is the thing', 'Seneca', new Date(2022, 2, 6))
  ];

  toggleDetails(index: number) {
    this.quotes[index].showAuthor = !this.quotes[index].showAuthor;
  }

  deleteQuote(isComplete: any, index: number) {
    if(isComplete) {
      let toDelete = confirm(`Are you sure you want to delete ${this.quotes[index].name}?`)
      if(toDelete) {
      this.quotes.splice(index, 1);
      }
    }

  }

  addNewQuote(quote: any) {
    let quoteLength = this.quotes.length;
    quote.id = quoteLength + 1;
    quote.completDate = new Date(quote.completeDate)
    this.quotes.push(quote)
  }

  countVote = 0;

  upVote() {
    // this.target.innerHTML = this.countVote++;
  }

  downVote() {

  }

  constructor() { }

  ngOnInit(): void {
  }

}
