/**
 * Created by fabin on 2016-10-28.
 */
import { Injectable } from '@angular/core';
import {Headers, Http, URLSearchParams, Response} from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/delay';

import {ResponseResult, User} from './';

@Injectable()
export class UserService {
  public isLoggedIn:boolean = false;
  // store the URL so we can redirect after logging in
  redirectUrl:string;
  loginUrl:string = '/WebService/student/login';
  public user:User;

  constructor(private http:Http){}

  login(userNo:string, password:string):Observable<boolean> {
    let loginParam = {
      user: {
        userNo: userNo,
        password: password,
        isLogin: false
      }
    } ;
    return this.http.post(this.loginUrl, JSON.stringify(loginParam),{headers: new Headers({"Accept":"application/json","Content-Type":"application/json"})})
      .do(res=>{
        let resResult = res.json() as ResponseResult;
        if(resResult.status == 1){
          this.isLoggedIn = true;
          this.user = resResult.data as User;
        }else{
          this.isLoggedIn = false;
        }
      })
      .map(this.extractData);
  }
  private extractData(res:Response) {
    let resResult = res.json() as ResponseResult;
    return resResult.status == 1;
  }
  private handleError (error: any) {
    // In a real world app, we might use a remote logging infrastructure
    // We'd also dig deeper into the error to get a better message
    let errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg); // log to console instead
    return Observable.throw(errMsg);
  }
  logout():void {
    this.isLoggedIn = false;
  }
}
