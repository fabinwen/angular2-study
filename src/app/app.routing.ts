/**
 * Created by fabin on 2016-9-18.
 */
import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {ExamComponent} from './exam/exam.component';

const appRoutes:Routes = [
  {
    path: 'book-exam/:id/:name',
    component: ExamComponent
  }
];

export const appRoutingProviders:any[] = [];


export const routing:ModuleWithProviders = RouterModule.forRoot(appRoutes);
