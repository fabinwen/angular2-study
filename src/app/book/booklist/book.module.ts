/**
 * Created by fabin on 2016-10-26.
 */
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule } from '@angular/forms';

import {Ng2BootstrapModule,AccordionModule,AlertModule,ModalModule,PaginationModule } from 'ng2-bootstrap/ng2-bootstrap';

import {BookRoutingModule} from './book.routing.module.ts';
import {BooklistComponent} from './booklist.component.ts';
import {BookDetailComponent} from '../book-detail/book-detail.component';
import {BookService } from '../book-detail/book.service';
import {BooklistService} from './booklist.service.ts';
import {ReadFlagPipe} from './read-flag.pipe.ts';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    Ng2BootstrapModule,
    AccordionModule,
    AlertModule,
    ModalModule,
    PaginationModule,
    BookRoutingModule
  ],
  declarations: [BooklistComponent, ReadFlagPipe, BookDetailComponent],
  exports: [ReadFlagPipe],
  providers: [BooklistService, BookService]
})
export class BookModule {

}
