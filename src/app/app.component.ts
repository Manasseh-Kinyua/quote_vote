import { Component } from '@angular/core';
import { Quote } from './quote';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  quotes: Quote[] = [
    {id: 1, name:'The purpose of our lives is to be happy'},
    {id: 2, name:'Many of failures in life are people who did not realise how close they were to success when they gave up'},
    {id: 3, name:'Not how long but how well you have lived is the thing'}
  ];
}
