import { Injectable } from '@angular/core';
import {Headers, Http, URLSearchParams} from '@angular/http';

import 'rxjs/add/operator/toPromise';

import {Impression} from './impression';
import {ImpressionList} from './impression-list';
import {Page} from '../shared';

@Injectable()
export class ImpressionService {
  private bookImprlUrl = '/WebService/booklist/books/';
  private headers = new Headers({"Accept": "application/json"});
  private params = new URLSearchParams('');

  constructor(private http:Http) {
  }

  getBookImpressions(id:number, pageIndex:number, pageSize:number):Promise<ImpressionList> {
    let parmasMap = new Map<string, string[]>();
    parmasMap.set("pageIndex",[pageIndex.toString()]);
    parmasMap.set("pageSize",[pageSize.toString()]);
    parmasMap.set("stuNo",['801']);
    this.params.paramsMap = parmasMap;
    return this.http.get(this.bookImprlUrl + id + '/impressions', {
      headers: this.headers,
      search: this.params
    }).toPromise()
      .then(response=>{
        let il = new ImpressionList();
        il.impressions =  response.json().data.list as Impression[];
        il.page = response.json().data.page as Page;
        return il;
      })
      .catch(this.handleError);
  }

  private handleError(error:any):Promise<any> {
    console.error('出错了', error);
    return Promise.reject(error.message || error);
  }
}
