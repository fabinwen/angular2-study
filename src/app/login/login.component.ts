/**
 * Created by fabin on 2016-10-28.
 */
import {Component} from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';

import {UserService, User} from '../shared';

@Component({
  templateUrl:'./login.component.html',
  styleUrls:['./login.component.css']
})
export class LoginComponent{
  errorMsg = '';
  constructor(public userService:UserService, private router:Router){}

  login(userNo:string, pwd:string):void{
    this.userService.login(userNo, pwd).subscribe(val=>{
      if(val){
        let redirect = this.userService.redirectUrl ? this.userService.redirectUrl : 'book';
        // Redirect the user
        this.router.navigate([redirect]);
      }else{
        this.errorMsg = '用户名或密码错误。';
      }
    });
  }

  logout():void{
    this.userService.logout();
  }
}
