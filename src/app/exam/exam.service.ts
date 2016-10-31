import { Injectable } from '@angular/core';
import {Headers, Http, URLSearchParams} from '@angular/http';

import 'rxjs/add/operator/toPromise';

import {ExamQuestion} from './exam-question';
import {ResponseResult} from '../shared';

@Injectable()
export class ExamService {
  private examUrl = '/WebService/examService/examinations/';
  private headers = new Headers({"Accept":"application/json"});
  private params = new URLSearchParams('type=book');

  constructor(private http:Http) { }

  getExamQuestion(bookId:number, type:string):Promise<ExamQuestion[]>{
    return this.http.get(this.examUrl+bookId, {headers:this.headers, search:this.params}).toPromise()
      .then(response=>response.json().dataList as ExamQuestion[])
      .catch(this.handleError);
  }

  postAnswers(answers:any):Promise<ResponseResult>{
    return this.http.post(this.examUrl, JSON.stringify(answers),{headers: new Headers({"Accept":"application/json","Content-Type":"application/json"})}).toPromise()
      .then(response=>response.json() as ResponseResult)
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('出错了', error);
    return Promise.reject(error.message || error);
  }
}
