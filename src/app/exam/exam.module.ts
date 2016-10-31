import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule } from '@angular/forms';

import {Ng2BootstrapModule,AccordionModule,AlertModule,ModalModule,PaginationModule} from 'ng2-bootstrap/ng2-bootstrap';

import {ExamRoutingModule} from './exam.routing.module';
import { ExamComponent } from './exam.component.ts';
import {ExamService} from './exam.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    Ng2BootstrapModule,
    AccordionModule,
    AlertModule,
    ModalModule,
    ExamRoutingModule
  ],
  declarations: [ExamComponent],
  providers:[ExamService]
})
export class ExamModule { }
