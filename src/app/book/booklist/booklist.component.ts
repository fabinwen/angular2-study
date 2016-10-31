import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';

import {Booklist} from './booklist';
import {BooklistService} from './booklist.service.ts';
import {Book} from './book';

@Component({
  selector: 'app-booklist',
  templateUrl: './booklist.component.html',
  styleUrls: ['./booklist.component.css']
})
export class BooklistComponent implements OnInit {
  oneAtATime:boolean = false;
  booklists:Booklist[];
  selectedBook:Book;

  constructor(private booklistService:BooklistService, private router:Router, private route:ActivatedRoute) {
  }

  ngOnInit():void {
    this.getBooklists();
  }

  getBooklists():void {
    this.booklistService.getBooklists().then(booklists=>this.booklists = booklists);
  }

  onSelect(book:Book):void {
    this.selectedBook = book;
  }

  gotoDetail(book:Book):void {
    let link = ['book/detail', book.id];
    this.router.navigate(link);
    //this.router.navigate(link, {relativeTo:this.route.parent});
  }
}
