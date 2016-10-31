/**
 * Created by fabin on 2016-10-26.
 */
import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';

import {AuthGuard } from './auth-guard';

@NgModule({
  imports: [
    RouterModule.forRoot([
      {
        path: '',
        redirectTo: 'book',
        pathMatch: 'full'
      },
      {
        path:'exam',
        loadChildren: () => require('es6-promise!./exam/exam.module')('ExamModule')
      }
    ])
  ],
  exports: [RouterModule],
  providers:[
    AuthGuard
  ]
})
export class AppRoutingModule {}


//loadChildren: () => require('es6-promise!./exam/exam.module')('ExamModule')
//loadChildren: './exam/exam.module#ExamModule'
