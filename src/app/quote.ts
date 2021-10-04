// import { stringify } from '@angular/compiler/src/util';

export class Quote {
  constructor(
    public id: number,
    public title: string,
    public quoteDesc: string,
    public author: string,
    public creater: string,
    public dateCreated: Date,
    public upvotes: number,
    public downvotes: number,
    public age: number,
    public highest: boolean
  ) {}
}
