/**
 * Created by fabin on 2016-10-26.
 */
import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';

import {BooklistComponent} from './booklist.component.ts';
import {BookDetailComponent} from '../book-detail/book-detail.component';
import {AuthGuard} from '../../auth-guard';

@NgModule({
  imports: [RouterModule.forChild([
    {
      path:'book',
      canActivate: [AuthGuard],
      children:[
        {path: 'list', component: BooklistComponent},
        {path: 'detail/:id',component: BookDetailComponent},
        {path: '',redirectTo: 'list', pathMatch: 'full' }
      ]
    }
  ])]
})
export class BookRoutingModule {

}
