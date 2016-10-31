/**
 * Created by fabin on 2016-10-28.
 */
import { NgModule }       from '@angular/core';
import { RouterModule }   from '@angular/router';

import { UserService }    from '../shared';
import { LoginComponent } from './login.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      { path: 'login', component: LoginComponent }
    ])
  ],
  exports: [
    RouterModule
  ],
  providers: [
    UserService
  ]
})
export class LoginRoutingModule {}
