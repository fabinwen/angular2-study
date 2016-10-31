import { Injectable } from '@angular/core';
import {Headers, Http, URLSearchParams} from '@angular/http';

import 'rxjs/add/operator/toPromise';

import {Book} from '../booklist/book';

@Injectable()
export class BookService {
  private bookDetailUrl = '/WebService/booklist/books/';
  private headers = new Headers({"Accept":"application/json"});
  private params = new URLSearchParams('stuNo=801');
  constructor(private http:Http) { }

  getBookDetail(id:number):Promise<Book>{
    return this.http.get(this.bookDetailUrl+id, {headers:this.headers, search:this.params}).toPromise()
      .then(response=>response.json().data as Book)
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('出错了', error);
    return Promise.reject(error.message || error);
  }
}
