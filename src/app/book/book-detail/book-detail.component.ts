import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import {NgForm,FormGroup, FormControl} from '@angular/forms';

import {fromByteArray} from 'base64-js';

import {Book} from '../booklist/book';
import {BookService} from './book.service.ts';
import {Impression} from '../../impr/impression';
import {ImpressionList} from '../../impr/impression-list';
import {ImpressionService} from '../../impr/impression.service';
import {Page} from '../../shared';

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.css']
})
export class BookDetailComponent implements OnInit {
  bookId:number;
  book:Book;
  impressions:Impression[];
  formGroup:FormGroup;
  page:Page = new Page();
  contentKey = 'content';
  imgKey = 'pic';
  maxSize = 5;

  constructor(private bookService:BookService,
              private imprService:ImpressionService,
              private route:ActivatedRoute,
              private router:Router) {
    this.formGroup = new FormGroup({
      content:new FormControl(''),
      pic:new FormControl('')
    });
  }

  getImpressions():void {
    this.imprService.getBookImpressions(this.bookId, this.page.pageIndex, this.page.pageSize).then(imprs=>{
      this.impressions = imprs.impressions;
      this.page = imprs.page;
      this.maxSize = this.maxSize > this.page.pageCount ? this.page.pageCount:this.maxSize;
    });
  }

  ngOnInit() {
    this.route.params.forEach((params:Params)=> {
      let id = +params['id'];
      this.bookId = id;
      this.bookService.getBookDetail(id).then(book=>this.book = book);
    });
    this.getImpressions();
  }

  gotoExam(bookId:number):void {
    let link = ['exam/book', bookId, {name:this.book.name}];
    this.router.navigate(link);
  }

  onSubmit():void{
    console.info(this.formGroup.value);
  }
  onChange(event) {
    let files = event.srcElement.files;
    let fileReader = new FileReader();
    fileReader.onload = function(ev){
      console.info('data:'+(ev.target as FileReader).result);
    }
    fileReader.readAsDataURL(files[0]);
  }

  pageChanged(event:any):void {
    this.page.pageIndex = event.page;
    this.getImpressions();
  }
}
