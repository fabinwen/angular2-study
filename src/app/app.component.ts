import { Component,ViewContainerRef  } from '@angular/core';
import {UserService} from './shared';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  private viewContainerRef: ViewContainerRef;
  constructor(viewContainerRef:ViewContainerRef, private userService:UserService){
    this.viewContainerRef = viewContainerRef;
  }
  title = '阅读';
}
