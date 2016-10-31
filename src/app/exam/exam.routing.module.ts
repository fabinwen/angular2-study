/**
 * Created by fabin on 2016-10-26.
 */
import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';

import {ExamComponent} from './exam.component';

@NgModule({
  imports: [
    RouterModule.forChild([{path: 'book/:id', component: ExamComponent}])
  ],
  exports: [RouterModule]
})
export class ExamRoutingModule {}
