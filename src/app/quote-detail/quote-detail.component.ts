import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote-detail',
  templateUrl: './quote-detail.component.html',
  styleUrls: ['./quote-detail.component.css'],
})
export class QuoteDetailComponent implements OnInit {
  @Input() quote: any;
  @Input() quotes: any;
  @Output() isBad = new EventEmitter<boolean>();
  @Output() qVote = new EventEmitter<boolean>();

  deleteQuote(bad: boolean) {
    this.isBad.emit(bad);
  }

  like(likeValue: boolean) {
    this.qVote.emit(likeValue);
  }
  quoteWithHighestVotes() {
    for (var index = 0; index < this.quotes.length; index++) {
      for (var i = 0; i < this.quotes.length; i++) {
        if (this.quotes[index].upvotes > this.quotes[i].upvotes) {
          this.quotes[index].highest = true;
          this.quotes[i].highest = false;
        }
      }
    }
  }

  constructor() {}

  ngOnInit(): void {}
}
