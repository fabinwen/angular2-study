import {Injectable} from '@angular/core';
import {Headers, Http, URLSearchParams} from '@angular/http';

import 'rxjs/add/operator/toPromise';

import {Booklist} from './booklist';

@Injectable()
export class BooklistService{
  private booklistUrl = '/WebService/booklist/bookLists/801';
  private headers = new Headers({"Accept":"application/json"});
  private params = new URLSearchParams('pageIndex=1&pageSize=20');
  constructor(private http:Http){}

  getBooklists():Promise<Booklist[]>{
    return this.http.get(this.booklistUrl, {headers:this.headers, search:this.params}).toPromise()
        .then(response=>response.json().data.list as Booklist[]).then(booklists=>booklists.filter(booklist=>booklist.books != undefined))
        .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('出错了', error);
    return Promise.reject(error.message || error);
  }
}
